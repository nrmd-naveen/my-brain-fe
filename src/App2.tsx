import React from "react";
import App from "./App";
import BarsSVG from "./assets/icons/BarsSVG";
import { useNavigate } from "react-router-dom";
import Button from "./assets/ui/Button";

const App2 = () => { //layout
    return <>
        <div className="bg-mywhite-bg min-h-screen h-[full] w-screen items-center">
            <div className="flex-col">
                <BarsSVG />
                <Header />
            </div>
                <App />
        </div>
    </>
};

const Header = () => {
    const Navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        Navigate("/login")
    }   
    return <>
        <div className="p-2 px-6 md:p-8 z-20 flex justify-center items-center h-24">
            <header className="z-40 fixed w-11/12 flex jutisfy-between items-center h-16 px-4 bg-black/10 backdrop-blur-lg border-mywhite-border shadow-md rounded-xl">
                <h1 className="text-xl text-myblack-text font-bold">My Brain</h1>
                <div className="flex gap-6">
                    <Button
                        variant="primary"
                        text="Logout"
                        onClick={() => handleLogout()}
                        
                    />
                </div>
            </header>
        </div>
    </>
}
export default App2;
