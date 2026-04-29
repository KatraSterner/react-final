"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import UserPlantCard from "@/app/components/userPlantCard";
import { useAppContext } from "@/context/context";
import Link from "next/link";
import { Plant } from "@/app/types";


export default function Home() {

    const [plants, setPlants] = useState<Plant[]>([]);
    const params = useParams();
    const userName = typeof params?.username === "string" ? params.username : undefined;
    const { user, setUser } = useAppContext();

    useEffect(() => {
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
        setPlants(mockData);
    }, [userName])

    if (!user) {
        return (
            <main className="bg-green-100 min-h-screen">
                <div className="p-6 text-xl text-black text-center">
                    <p>You must be logged in to view your garden.</p>
                    <Link href="/" className="text-green-600 font-bold underline">Return to Login</Link>
                </div>
            </main>
        );
    }

    if (!user.garden || user.garden.length === 0) {
        return (
            <main className="bg-green-100 min-h-screen">
                <div className="p-6 text-xl text-black text-center">
                    <p>No Plants Have Been Saved to Your Garden</p>
                    <Link href="/directory" className="text-green-600 font-bold underline">Return to Directory</Link>
                </div>

            </main>
        );
    }

    return (
        <div className="bg-green-100 text-black min-h-screen" >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-green-100">
                {user.garden.length > 0 && 
                    user.garden.map((plant, index) => {
                        return <UserPlantCard plant={plant} key={plant.gardenId}/>
                    })
                }
            </div>
        </div>
    );
}