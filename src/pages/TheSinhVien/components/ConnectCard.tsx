import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSocketServerCard } from "../utils/connect/socketIO";


const ConnectCard = () => {

    const socket = getSocketServerCard();
    const navigate = useNavigate();

    const [roomID, setRoomID] = useState("");
    
    const connectCard = async () => { 
        localStorage.setItem('roomID', roomID);
        socket.emit("join", roomID)
        navigate("/login-card");
     };

    return (
        <div>
            <div>Connect card</div>
            <input onChange={(e)=>setRoomID(e.target.value)}/>
            <button onClick={()=>{
                if(roomID.length > 0){
                    connectCard();
                }else console.log("Please try again.")
            }}>Connect</button>
        </div>
    )
}

export default ConnectCard;