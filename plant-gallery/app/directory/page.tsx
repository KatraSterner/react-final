"use client";

import { useState, useEffect } from "react";
import PlantCard from "../components/plantCard";
import { Plant } from "../types";
import { useAppContext } from "@/context/context"; 
import { FormEvent } from "react";

export default function Home() {

  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  var page = 1;

  const key = process.env.NEXT_PUBLIC_API_KEY;        
  const baseUrl = "https://perenual.com/api/v2/species-list?key=" + key + "&page=" + page;

  var url = baseUrl //+ "&page=" + page;

  async function handleFilter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    page = 1

    if (filter === "all") {
      url = baseUrl;
    } else {
      url = baseUrl + "&" + filter + "=1";
    }
    url = url + "&q=" + search;
    fetchData();
  }

  async function fetchData() {
    setLoading(true);
    const response = await fetch(url);
    const data: { data: Plant[] } = await response.json();
    setPlants(data.data);
    setLoading(false);
    // console.log(url)
  }

  async function clearForm() {
    setSearch("");
    setFilter("all");
    url = baseUrl;
    fetchData;
  }

  useEffect(() => {
    
    fetchData();

    const mockData =  [
        {
            "id": 1,
            "common_name": "European Silver Fir",
            "scientific_name": [
                "Abies alba"
            ],
            "other_name": [
                "Common Silver Fir"
            ],
            "family": null,
            "hybrid": null,
            "authority": null,
            "subspecies": null,
            "cultivar": null,
            "variety": null,
            "species_epithet": "alba",
            "genus": "Abies",
            "default_image": {
                "image_id": 9,
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Abies_alba_Wis%C5%82a_1.jpg/960px-Abies_alba_Wis%C5%82a_1.jpg",
                "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
                "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Abies_alba_Wis%C5%82a_1.jpg/960px-Abies_alba_Wis%C5%82a_1.jpg"
            }
        },
        {
            "id": 2,
            "common_name": "Pyramidalis Silver Fir",
            "scientific_name": [
                "Abies alba 'Pyramidalis'"
            ],
            "other_name": null,
            "family": null,
            "hybrid": null,
            "authority": null,
            "subspecies": null,
            "cultivar": "Pyramidalis",
            "variety": null,
            "species_epithet": "alba",
            "genus": "Abies",
            "default_image": {
                "image_id": 9,
                "license": 5,
                "license_name": "Attribution-ShareAlike License",
                "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
                "original_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/European_Silver-fir_Vallombrosa_%28FI%29%2C_Italy.jpg/960px-European_Silver-fir_Vallombrosa_%28FI%29%2C_Italy.jpg",
                "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
                "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/European_Silver-fir_Vallombrosa_%28FI%29%2C_Italy.jpg/960px-European_Silver-fir_Vallombrosa_%28FI%29%2C_Italy.jpg"
            }
        }
    ]

    //setLoading(true);
    //setPlants(mockData);
    //setLoading(false);
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <p className="text-2xl font-bold text-green-800 animate-pulse">
          🌱 Loading plants...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-100 text-black min-h-screen" >
      <div className="flex justify-center items-center gap-5">
        <form className="flex items-center mt-2 gap-3" onSubmit={handleFilter}>
          <button onClick={clearForm} className="text-white bg-green-400 p-2 rounded-md text-xl font-bold hover:bg-green-500 hover:shadow-md h-10 px-4">Clear</button>

          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="text-green-800 bg-white pr-5 pl-2 rounded-md text-xl h-10">
            <option value="all">All</option>
            <option value="edible">Edible</option>
            <option value="poisonous">Poisonous</option>
            <option value="indoor">Indoor</option>
          </select>

          <input type="text" className="text-green-800 bg-white p-2 pr-5 rounded-md text-xl h-10" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search plants..."/>

          <button type="submit" className="text-white bg-green-400 p-2 rounded-md text-xl font-bold hover:bg-green-500 hover:shadow-md h-10 px-4">Filter</button>
        </form>
      </div>

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