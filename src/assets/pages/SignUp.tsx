import React, { useEffect } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import {  signUp } from "../../services/api";
import DotLoader from "../ui/Loader";
import { alertState, authState, LoadingState } from "../../recoil/atom";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { AlertState } from "../../services/types";

const SignUp = () => {
    const setIsLoading = useSetRecoilState(LoadingState);
    const isAuthenticated = useRecoilValue(authState);
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const Navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) Navigate("/");
    }, [isAuthenticated])
    
    const setAlert = useSetRecoilState<AlertState>(alertState)
    const handleSignUp = () => {
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
            setIsLoading(true);
            signUp(data).then(res => {
                console.log(res)
                setIsLoading(false);
                setAlert((prev) => ({
                    ...prev,
                    message: "Signup Success!",
                    type: "success",
                    isVisible: true,
                }))
                
            }).catch(err => {
                console.log(err)
                setIsLoading(false);
                setAlert((prev) => ({
                    ...prev,
                    message: "Error while Signing up!",
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

                    <h1 className="font-semibold text-black/80 text-lg md:text-xl py-4 text-center">SignUp</h1>
                    
                <Input 
                    placeHolder='username'
                    ref={usernameRef}
                    />
                <Input 
                    placeHolder='Password'
                    ref={passwordRef}
                    />
                <Button
                    text='SignUp'
                    onClick={() => handleSignUp()}
                    variant='primary'
                    />
                    <div className="text-center text-sm text-black/50 py-4">
                        Already have an account? <span className="text-blue-800 font-semibold hover:underline cursor-pointer" onClick={() => window.location.href = "/login"}>Login</span>
                    </div>
                </div>
            </div>
        </>
  )
};

export default SignUp;
