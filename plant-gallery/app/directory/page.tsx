"use client";

import { useState, useEffect } from "react";
import PlantCard from "../components/plantCard";
import { Plant } from "../types";

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plants?.length > 0 && 
        plants.map((plant, index) => {
          return <PlantCard plant={plant} key={plant.id}/>
        })
      }
      </div>
      
    </div>
  );
}