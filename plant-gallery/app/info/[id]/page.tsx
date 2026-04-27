"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { PlantDetails } from "@/app/types";

export default function Home() {

    const [plant, setPlant] = useState<PlantDetails>();
    const params = useParams();
    const plantId = typeof params?.id === "string" ? params.id : undefined;

    useEffect(() => {
        async function fetchData() {
            const key = process.env.NEXT_PUBLIC_API_KEY;    
            const url = `https://perenual.com/api/v2/species/details/${plantId}?key=${key}`

            try {
                const result = await fetch(url)
                const data: PlantDetails = await result.json();
                setPlant(data);
            } catch (error) {
                console.log("ERROR! D: Oh No!:", error);
            }
        }
        fetchData();
        // mock data for when API acts up and testing visuals
        const mockPlant: PlantDetails = {
            id: 1,
            common_name: "European Silver Fir",
            scientific_name: ["Abies alba"],
            other_name: ["Common Silver Fir"],
            family: "Pinaceae",
            origin: ["Europe"],
            type: "tree",

            dimensions: {
                type: null,
                min_value: 1,
                max_value: 1.5,
                unit: "feet",
            },

            cycle: "Perennial",
            watering: "Frequent",

            watering_general_benchmark: {
                min: 5,
                max: 7,
                unit: "days",
            },

            plant_anatomy: [
                { part: "leaves", color: ["dark-green"] },
                { part: "branches", color: ["dark-brown"] },
                { part: "twigs", color: ["brown"] },
            ],

            sunlight: ["full sun", "part shade"],

            pruning_month: ["March", "April"],

            pruning_count: {
                amount: 1,
                interval: "yearly",
            },

            seeds: 0,
            attracts: ["bees", "birds", "rabbits"],
            propagation: ["seed", "cutting"],

            hardiness: { min: "7", max: "7" },

            hardiness_location: {
                full_url: "https://example.com",
                full_iframe: "<iframe></iframe>",
            },

            flowers: true,
            flowering_season: "Spring",

            soil: ["Rocky", "Dry", "Well-drained"],
            pest_susceptibility: ["Aphids", "Root rot"],

            cones: true,
            fruits: false,
            edible_fruit: false,

            fruiting_season: "Autumn",
            harvest_season: "Autumn",
            harvest_method: "cutting",

            leaf: true,
            edible_leaf: false,

            growth_rate: "High",
            maintenance: "Low",
            medicinal: true,

            poisonous_to_humans: false,
            poisonous_to_pets: false,

            drought_tolerant: false,
            salt_tolerant: false,

            thorny: false,
            invasive: false,
            rare: false,
            tropical: false,
            cuisine: false,
            indoor: false,

            care_level: "Medium",
            description: "Amazing garden plant...",

            default_image: {
                image_id: 9,
                license: 5,
                license_name: "Attribution-ShareAlike License",
                license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
                original_url: "",
                regular_url: "",
                medium_url: "",
                small_url: "",
                thumbnail: "",
            },

            other_images: [],

            xWateringQuality: ["Rainwater", "Distilled Water"],
            xWateringPeriod: ["Morning", "Evening"],

            xWateringAvgVolumeRequirement: {
                unit: "gallon",
                value: "1",
            },

            xWateringDepthRequirement: {
                unit: "inches",
                value: 12,
            },

            xWateringBasedTemperature: {
                unit: "celsius",
                min: 10,
                max: 20,
            },

            xWateringPhLevel: {
                min: 5.5,
                max: 6.5,
            },

            xSunlightDuration: {
                min: "6",
                max: "12",
                unit: "hours",
            },
        };
        // setPlant(mockPlant);
    }, [plantId])

    if (!plant) {
        return (
        <main className="bg-green-200">
            <div className="p-6 text-black">Loading...</div>
        </main>
        );
    }

    return (
        <div className="min-h-screen bg-green-50 p-6 flex justify-center">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* 🌿 Header */}
                <div className="bg-green-200 p-6">
                    <h1 className="text-3xl font-bold text-green-900">
                        {plant.common_name}
                    </h1>
                    <p className="italic text-green-800">
                        {plant.scientific_name.join(", ")}
                    </p>
                </div>

                {/* 🖼 Image */}
                {plant.default_image?.regular_url ? (
                    <img
                        src={plant.default_image.regular_url}
                        alt={plant.common_name}
                        className="w-full h-64 object-cover"
                    />
                    ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600">
                        No image available
                    </div>
                )}

                <div className="p-6 space-y-6 text-gray-800">

                    {/* 📌 Basic Info */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Basic Info</h2>
                        <div className="grid grid-cols-2 gap-2">
                        <p><strong>Family:</strong> {plant.family}</p>
                        <p><strong>Type:</strong> {plant.type}</p>
                        <p><strong>Cycle:</strong> {plant.cycle}</p>
                        <p><strong>Growth Rate:</strong> {plant.growth_rate}</p>
                        <p><strong>Care Level:</strong> {plant.care_level}</p>
                        </div>
                    </section>

                    {/* 🌞 Growing Conditions */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Growing Conditions</h2>
                        <p><strong>Sunlight:</strong> {plant.sunlight.join(", ")}</p>
                        <p><strong>Soil:</strong> {plant.soil?.join(", ")}</p>
                        <p><strong>Watering:</strong> {plant.watering}</p>
                        <p>
                        <strong>Water Every:</strong>{" "}
                        {plant.watering_general_benchmark?.min}–{plant.watering_general_benchmark?.max}{" "}
                        {plant.watering_general_benchmark?.unit}
                        </p>
                    </section>

                    {/* 🌸 Features */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Features</h2>
                        <div className="grid grid-cols-2 gap-2">
                        <p>🌸 Flowers: {plant.flowers ? "Yes" : "No"}</p>
                        <p>🍃 Leaves: {plant.leaf ? "Yes" : "No"}</p>
                        <p>🍎 Fruits: {plant.fruits ? "Yes" : "No"}</p>
                        <p>🌲 Cones: {plant.cones ? "Yes" : "No"}</p>
                        </div>
                    </section>

                    {/* 🐝 Ecology */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Ecology</h2>
                        <p><strong>Attracts:</strong> {plant.attracts?.join(", ")}</p>
                        <p><strong>Pests:</strong> {plant.pest_susceptibility?.join(", ")}</p>
                    </section>

                    {/* ✂️ Maintenance */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Maintenance</h2>
                        <p>
                        <strong>Pruning Months:</strong> {plant.pruning_month?.join(", ")}
                        </p>
                        <p>
                        <strong>Pruning:</strong> {plant.pruning_count?.amount} time(s){" "}
                        {plant.pruning_count?.interval}
                        </p>
                    </section>

                    {/* 🌱 Description */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p>{plant.description}</p>
                    </section>

                </div>
            </div>
        </div>
    );
}