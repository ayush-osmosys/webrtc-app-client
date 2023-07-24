import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../contexts/RoomContext";

export const Room = () => {
  const { id } = useParams();
  const { webSocket } = useContext(RoomContext);
  useEffect(() => {
    webSocket.emit("join-room", { roomId: id });
  }, []);
  return <>Room Id {id}</>;
};
