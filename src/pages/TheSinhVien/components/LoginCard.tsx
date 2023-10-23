import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSocketServerCard } from "../utils/connect/socketIO"; 

const LoginCard = () => {

    const socket = getSocketServerCard();
    const navigate = useNavigate();
    const [pin, setPin] = useState("");

    const loginCard = ()=>{
        const roomID = localStorage.getItem("roomID");
        localStorage.setItem("pin", pin);
        socket.emit("client-wanna-login-card", {roomID, pin: pin})
    }

    useEffect(()=>{
       socket.on("card-response-login-card", (data)=>{
            if(data.result) {
                navigate("/login-page")
            }
            console.log(data.message);
       })
    }, [])

    return (
        <div>
            <div>Nhập mã pin</div>
            <input onChange={(e) => setPin(e.target.value)}/>
            <button onClick={()=> loginCard()}>Login card</button>
        </div>
    )
}

export default LoginCard;