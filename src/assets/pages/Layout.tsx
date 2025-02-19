import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useSetRecoilState } from "recoil";
import { authState } from "../../recoil/atom";

const Layout = ({children}: any) => {
    return <>
        <div className="min-w-screen overflow-x-hidden bg-[#f0eeee]">
            <Header />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    </>
};

const Header = () => {
    const setAuth = useSetRecoilState(authState);
    const Navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        setAuth(false)
        Navigate("/login")
    }   
    return <>
        <div className="p-2 px-6 md:p-8 z-20 flex justify-center items-center h-24 ">
            <header className="z-40 fixed w-9/12 md:w-8/12 flex  justify-between items-center h-16 px-5 md:px-20 bg-black/10 backdrop-blur-lg border-mywhite-border shadow-md rounded-xl">
                <div>

                <h1 className="text-xl md:text-[27px] text-neutral-500 font-extrabold tracking-wide ">Storify</h1>
                </div>
                <div className="">
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

export default Layout;
