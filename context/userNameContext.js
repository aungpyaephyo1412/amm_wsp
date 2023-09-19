import {createContext, useContext, useState} from "react";
export const UsernameContext = createContext("")
import React from 'react';

const UserNameContextProvider = ({childern}) => {
    const [data,setData] = useState("default data")
    return (
        <UsernameContext.Provider value={data}>
            {childern}
        </UsernameContext.Provider>
    );
};
export const useUserName = ()=>{
    return useContext(UsernameContext)
}

export default UserNameContextProvider;
