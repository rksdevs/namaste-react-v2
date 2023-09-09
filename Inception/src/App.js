import React from "react";
import ReactDOM from "react-dom/client";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

//parent container of the entire app
const AppLayout = () => {
    return <div className="app">
            <Header />
            <MainContainer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
