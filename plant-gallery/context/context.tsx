"use client";

import { Plant } from "@/app/types";
import { createContext, useContext, useState } from "react";

// data about user
interface User {
  username: string;
  garden: GardenPlant[];
}

// plants that are stored in a user's garden
export type GardenPlant = Plant & {
  gardenId: string;
};

type Context = {
    user: User | null;
    setUser: (user: User | null) => void
}

const AppContext = createContext<Context | null>(null);

export function AppWrapper({children} : {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AppContext.Provider value={{
                user,
                setUser,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used inside AppWrapper :(")
    }
    return context;
}