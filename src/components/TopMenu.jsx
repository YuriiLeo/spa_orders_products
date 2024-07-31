import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "./TopMenu.css";

const TopMenu = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    const socket = socketIOClient("http://localhost:4001");

    socket.on("activeSessions", (data) => {
      setActiveSessions(data);
    });

    return () => {
      clearInterval(interval);
      socket.disconnect();
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
