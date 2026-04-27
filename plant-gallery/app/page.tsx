"use client";

import { useState, useEffect } from "react";
import PlantCard from "./components/plantCard";
import { Plant } from "./types";
import Link from "next/link";

export default function Home() {

  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    async function fetchData() {
      const key = process.env.NEXT_PUBLIC_API_KEY;
      const response = await fetch("https://perenual.com/api/v2/species-list?key=" + key);
      const data: { data: Plant[] } = await response.json();
      setPlants(data.data);
    }
    fetchData();
  }, [])

  return (
    <div className="bg-green-200" >
      <div className="min-h-screen flex flex-col items-center">
        <p className="text-black"> soon to be login page... </p>
        <Link 
          href="/directory"
          className="text-white p-10 m-10 bg-green-400 rounded-lg hover:bg-green-200 hover:text-white text-2xl font-bold"
        >View Our Plant Directory</Link>
      </div>
    </div>
  );
}