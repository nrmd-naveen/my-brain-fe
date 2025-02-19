import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/atom";
import DotLoader from "../ui/Loader";
import { useEffect } from "react";


const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(authState);
    const NavigateTo = useNavigate()
    useEffect(() => {
        if(!isAuthenticated) NavigateTo("/login")
    }, [isAuthenticated])
    
    if (!isAuthenticated) return <DotLoader />;
    return (
        <>
            <DotLoader />
        {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
};

export default ProtectedRoute;
