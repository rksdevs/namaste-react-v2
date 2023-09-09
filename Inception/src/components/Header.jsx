import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Search from "./Search";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    return <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <Search />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button className="login-btn" 
                        onClick={()=>{if(btnName === "Login"){setBtnName("Logout"); console.log(useState)} else {setBtnName("Login")}}}>
                        {btnName}
                    </button></li>

                </ul>

            </div>
        </div>
}

export default Header;