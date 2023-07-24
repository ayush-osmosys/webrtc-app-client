import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";

export const JoinButton: React.FC = () => {
  const { webSocket } = useContext(RoomContext);
  const createRoom = () => {
    webSocket.emit("create-room");
  };
  return (
    <button
      onClick={createRoom}
      className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600"
    >
      Start new room
    </button>
  );
};
