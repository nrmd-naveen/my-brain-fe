import React, { useEffect } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import DotLoader from "../ui/Loader";
import { useRecoilState, useSetRecoilState } from "recoil";
import { alertState, authState, LoadingState } from "../../recoil/atom";
import { AlertState } from "../../services/types";

const Login = () => {
    const setIsLoading = useSetRecoilState(LoadingState)
    const [isAuthenticated, setAuth] = useRecoilState(authState)
    const Nav = useNavigate()
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if(isAuthenticated) Nav("/")
    }, [isAuthenticated])
    
    const setAlert = useSetRecoilState<AlertState>(alertState)
    const handleLogin = () => {
        if (!usernameRef.current?.value || !passwordRef.current?.value) {
            setAlert((prev) => ({
                ...prev,
                message: "Please fill Credentials",
                type: "error",
                isVisible: true,
            }))
        }
        const data = {
            username: usernameRef.current?.value ,
            password: passwordRef.current?.value,
        }
        if (data.username && data.password) {
            setIsLoading(true)
            login(data).then(res => {
                if (res.token) {
                    setAuth(true)
                    Nav("/")
                    setIsLoading(false)
                    setAlert((prev) => ({
                        ...prev,
                        message: "Login Success!",
                        type: "success",
                        isVisible: true,
                    }))
                }
            }).catch(err => {
                console.log(err)
                setIsLoading(false)
                setAlert((prev) => ({
                    ...prev,
                    message: err.response.data.message || "Error while Loging in!",
                    type: "error",
                    isVisible: true,
                }))
            })
        }
    }
    return (
        <>
            <DotLoader />
            <div className="flex items-center justify-center h-[calc(100vh-100px)] font-poppins">
                <div className="flex flex-col gap-10 rounded-3xl w-80 md:w-96 p-10 backdrop-blur-sm bg-[#d3d3d3] border border-[#bcbcbc] shadow-xl">

                    <h1 className="font-semibold text-black/80 text-lg md:text-xl py-4 text-center">Login</h1>
                    
                <Input 
                    placeHolder='username'
                    ref={usernameRef}
                    />
                <Input 
                    placeHolder='Password'
                    ref={passwordRef}
                    />
                <Button
                    text='Login'
                    onClick={() => handleLogin()}
                    variant='primary'
                    />
                    <div className="text-center text-sm text-black/50 py-4">
                        Don't have an account? <span className="text-blue-800 font-semibold hover:underline cursor-pointer" onClick={() => Nav("/signup")}>Sign Up</span>   
                    </div>
                </div>
            </div>
        </>
  )
};

export default Login;
