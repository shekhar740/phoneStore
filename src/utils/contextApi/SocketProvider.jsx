import React, { createContext, useContext, useMemo, useEffect } from "react";
import { io } from "socket.io-client";

const socketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(socketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};

export const SocketProvider = ({ children }) => {
  const socket = useMemo(
    () => io("http://localhost:8089", { transports: ["websocket"] }),
    []
  );

  useEffect(() => {
    // Error handling
    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      // Handle connection error as needed
    });

    socket.on("connect_timeout", () => {
      console.error("Socket connection timed out");
      // Handle connection timeout as needed
    });
    socket.on('connection',()=>{
      console.log('socket attataced')
    })

    return () => {
      // Cleanup: close socket connection when component unmounts
      socket.disconnect();
    };
  }, [socket]);

  return (
    <socketContext.Provider value={socket}>
      {children}
    </socketContext.Provider>
  );
};
