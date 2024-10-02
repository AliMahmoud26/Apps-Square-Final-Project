import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from cookies
    Cookies.remove('authToken');

    // Redirect to the login page
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
      Logout
    </button>
  );
};

export default Logout;
