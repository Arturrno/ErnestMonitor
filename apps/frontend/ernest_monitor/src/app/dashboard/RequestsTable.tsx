"use client";

import { useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";

interface Threat {
  threatID: number;
  description?: string;
  regionName: string;
  trustLevel?: number;
  status?: string;
  createdAt?: Date;
}

interface RequestsTableProps {
  threats: Threat[];
  refreshData: () => void;
}

export default function RequestsTable({ threats, refreshData }: RequestsTableProps) {
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`https://localhost:7261/api/Threats/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...threats.find((t) => t.threatID === id),
          status: newStatus,
        }),
      });

      if (!response.ok) throw new Error("Update failed");
      refreshData();
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Region</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat) => (
            <tr key={threat.threatID}>
              <td>{threat.threatID}</td>
              <td>{threat.regionName}</td>
              <td>{threat.description}</td>
              <td>{threat.status}</td>
              <td className="d-flex gap-2">
                {threat.status === "Pending" ? (
                  <>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleStatusUpdate(threat.threatID, "Confirmed")}
                      disabled={updatingId === threat.threatID}
                    >
                      {updatingId === threat.threatID ? <Spinner as="span" animation="border" size="sm" /> : "Confirm"}
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleStatusUpdate(threat.threatID, "Resolved")}
                      disabled={updatingId === threat.threatID}
                    >
                      {updatingId === threat.threatID ? <Spinner as="span" animation="border" size="sm" /> : "Reject"}
                    </Button>
                  </>
                ) : (
                  <div style={{ height: "32px" }} /> // Keeps row height consistent
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
