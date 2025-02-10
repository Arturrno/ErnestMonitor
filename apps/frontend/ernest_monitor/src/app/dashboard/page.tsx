"use client";

import { useEffect, useState } from 'react';
import RequestsTable from './RequestsTable';

interface Threat {
  threatID: number;
  description?: string;
  regionName: string;
  trustLevel?: number;
  status?: string;
  createdAt?: Date;
}

export default function DashboardPage() {
  const [threats, setThreats] = useState<Threat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchThreats = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('https://localhost:7261/api/Threats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setThreats(data);
    } catch (err) {
      setError('Nie udało się pobrać zgłoszeń');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThreats();
  }, []);

  if (loading) return <div className="text-center mt-8"><span className="loading loading-spinner loading-lg"></span></div>;
  if (error) return <div className="alert alert-error mt-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Zgłoszenia</h1>
      <RequestsTable threats={threats} refreshData={fetchThreats} />
    </div>
  );
}