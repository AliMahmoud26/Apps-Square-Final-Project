import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const cookie = () => {
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Retrieve the token from cookies
    const authToken = Cookies.get('authToken');

    if (authToken) {
      setToken(authToken);
    } else {
      // If no token is found, redirect to login
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      {token ? (
        <h2>Welcome to your Dashboard!</h2>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default cookie;
