import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/dashboard")
    }, [router]);
    return (
        <div>
           Login
            <button onClick={()=>{
                router.push("/dashboard")
            }}>
                Login
            </button>
        </div>
    );
};

export default Login;
