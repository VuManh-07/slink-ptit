import { useNavigate } from "react-router-dom";
import { getSocketServerCard, getSocketServerPTIT } from "../utils/connect/socketIO";
import { useEffect } from "react";

const socketCard = getSocketServerCard();
const socketPtit = getSocketServerPTIT();

const LoginPage = () => {
    const navigate = useNavigate();
    const roomID = localStorage.getItem('roomID');
    const pin = localStorage.getItem('pin'); 
    const clientID = socketPtit.id; 
    const loginPage = ()=>{    
        socketCard.emit("client-wanna-login-page", {roomID, pin, clientID}); 
    }

    useEffect(()=>{
        socketPtit.on("res-token", (data)=>{
            console.log("ssssssssss",data);
            const accessToken = data.accessToken;
            if(accessToken) {
                localStorage.setItem('access_token', accessToken);
                localStorage.removeItem("pin");
                window.location.href = "/";
            }else {
                console.log("please try again.")
            }
        })
    }, [])

    return (
        <div>
            <div>Login page</div> 
            <button onClick={()=>loginPage()}>Login page</button>
        </div>
    )
}

export default LoginPage;