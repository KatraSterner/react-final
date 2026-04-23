"use client";

import { Plant } from "@/app/types";
import { createContext, useContext, useState } from "react";

type Context = {
    userName: string;
    setUserName: (userName: string) => void;
    userGarden: [];
    setUserGarden: (garden: Plant[]) => void;
}

const AppContext = createContext<any>(null);

export function AppWrapper({children} : {
    children: React.ReactNode;
}) {
    const [userName, setUserName] = useState('');
    const [userGarden, setUserGarden] = useState<Plant[]>([]);

    return (
        <AppContext.Provider
            value={{
                userName,
                setUserName,
                setUserGarden,
                userGarden
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}