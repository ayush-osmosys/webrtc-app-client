import socketIOClient from "socket.io-client";
import { ReactNode, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const webSocketURL = "http://localhost:2403";
export const RoomContext = createContext<null | any>(null);
const webSocket = socketIOClient(webSocketURL);

export const RoomProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const enterRoom = ({ roomId }: { roomId: string }) => {
    console.log(roomId);
    navigate(`room/${roomId}`);
  };

  useEffect(() => {
    webSocket.on("room-created", enterRoom);
  }, []);
  return (
    <RoomContext.Provider value={{ webSocket }}>
      {children}
    </RoomContext.Provider>
  );
};
