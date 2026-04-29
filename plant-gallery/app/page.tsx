"use client";

import { useState, useEffect, FormEvent } from "react";
import { Plant } from "./types";
import Link from "next/link";
import { useAppContext } from "@/context/context";
import { useRouter } from "next/navigation";

export default function Home() {

  const [plants, setPlants] = useState<Plant[]>([]);
  const [userNameInput, setUserNameInput] = useState("");
  const router = useRouter();

  const { user, setUser } = useAppContext();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // NOTE: if I was using a backend API or database I would check if user already exists 
    //       in database and fetch their garden instead of initializing a new one every 
    //       time. Also, I would have a separate feature to register a new user that WOULD 
    //       initialize an empty garden for the new user. 
    setUser({
      username: userNameInput,
      garden: [],
    });  

    router.push("/directory");
  }

  return (
    <div className="bg-green-100 min-h-screen flex items-start justify-center p-10">
      <div className="flex flex-col items-center bg-green-200 p-6 rounded-lg shadow-md">

        <h2 className="text-green-700 font-bold text-3xl m-3">Login to Access Personal Garden Features</h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input 
            type="text" 
            placeholder="Enter User ID..." 
            value={userNameInput} onChange={(e) => setUserNameInput(e.target.value)} 
            className="bg-white text-black placeholder:text-green-500 p-3 text-lg rounded-md my-2"
            required
          />
          <button type="submit" className="bg-green-400 p-2 rounded-md text-xl font-bold my-2 hover:bg-green-500 hover:shadow-md">Login</button>
          <button onClick={(e) => router.push("/directory")} className="bg-green-400 p-2 rounded-md text-xl font-bold hover:bg-green-500 hover:shadow-md">Skip Login</button>
        </form>

      </div>
    </div>
  );
}