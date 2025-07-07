import { useEffect, useState } from 'react';
import API from '../api';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await API.get('/auth/protected', {
          headers: { Authorization: token },
        });
        setMessage(res.data.message);
      } catch {
        setMessage('Access denied');
      }
    };
    fetchData();
  }, []);

  return <h2>{message}</h2>;
}

export default Dashboard;
