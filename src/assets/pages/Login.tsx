import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import DotLoader from "../ui/Loader";
import { useSetRecoilState } from "recoil";
import { LoadingState } from "../../recoil/atom";

const Login = () => {
    const setIsLoading = useSetRecoilState(LoadingState)
    const Nav = useNavigate()
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const handleLogin = () => {
        if(!emailRef.current || !passwordRef.current) alert('Please fill Credentials')
        const data = {
            email: emailRef.current?.value ,
            password: passwordRef.current?.value,
        }
        if (data.email && data.password) {
            setIsLoading(true)
            login(data).then(res => {
                if (res.token) {
                    Nav("/")
                    setIsLoading(false)
                }
            }).catch(err => {
                console.log(err)
                setIsLoading(false)
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
                    placeHolder='Email'
                    ref={emailRef}
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
    
                </div>
            </div>
        </>
  )
};

export default Login;
