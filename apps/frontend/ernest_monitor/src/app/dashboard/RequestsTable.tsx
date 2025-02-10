"use client";

import { useState } from 'react';

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
      const token = localStorage.getItem('authToken');
      const response = await fetch(`https://localhost:7261/api/Threats/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...threats.find(t => t.threatID === id),
          status: newStatus
        })
      });

      if (!response.ok) throw new Error('Update failed');
      refreshData();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Region</th>
            <th>Opis</th>
            <th>Status</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat) => (
            <tr key={threat.threatID}>
              <td>{threat.threatID}</td>
              <td>{threat.regionName}</td>
              <td>{threat.description}</td>
              <td>{threat.status}</td>
              <td className="flex gap-2">
                <button
                  onClick={() => handleStatusUpdate(threat.threatID, 'Confirmed')}
                  className="btn btn-success btn-xs"
                  disabled={updatingId === threat.threatID}
                >
                  {updatingId === threat.threatID ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    'Zatwierdź'
                  )}
                </button>
                <button
                  onClick={() => handleStatusUpdate(threat.threatID, 'Rejected')}
                  className="btn btn-error btn-xs"
                  disabled={updatingId === threat.threatID}
                >
                  {updatingId === threat.threatID ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    'Odrzuć'
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}