import { useEffect, useState } from 'react';
import useSocket from '../../src/services/hooks/useSocket';
import './TopMenu.css';

const TopMenu = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const activeSessions = useSocket(import.meta.env.VITE_SOCKET_URL);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="top-menu">
      <div>{dateTime}</div>
      <div>Active Sessions: {activeSessions}</div>
    </div>
  );
};

export default TopMenu;
