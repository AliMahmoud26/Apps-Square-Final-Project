"use client"
import withAuth from '../utils/withAuth'; // Adjust the path as necessary

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
};

// Wrap the Dashboard component with the withAuth HOC
export default withAuth(Dashboard);
