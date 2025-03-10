import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState, LoadingState } from "../recoil/atom";
import { verifyToken } from "../services/api";

const useAuthCheck = () => {
    const setAuth = useSetRecoilState(authState);
    const setLoading = useSetRecoilState(LoadingState);
    useEffect(() => {
        const verifyAuth = async () => {
            console.log("verifying")
            setLoading(true); 
            try {
                let response = await verifyToken();
                //@ts-ignore
                if(response.status === 502) {
                    response = await verifyToken();
                }
                //@ts-ignore
                if (response.data.token) {
                    setAuth(true);
                } else {
                    setAuth(false);
                } 
            } catch {
                setAuth(false);
            } finally {
                console.log("finally")
                setLoading(false);
            }
        };

        verifyAuth();
    }, [setAuth, setLoading]);
};

export default useAuthCheck;
