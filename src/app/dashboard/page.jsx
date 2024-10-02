// app/dashboard/page.jsx
import { useAuth } from '../protected-routes/AuthProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/protected-routes'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default Dashboard;
