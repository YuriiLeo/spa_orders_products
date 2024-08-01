import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const useSocket = (url) => {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const socket = socketIOClient(url);

    socket.on('activeSessions', (data) => {
      setActiveSessions(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [url]);

  return activeSessions;
};

export default useSocket;
