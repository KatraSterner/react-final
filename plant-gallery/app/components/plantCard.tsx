import Link from "next/link";
import { Plant } from "../types";

interface PlantCardProps {
    plant: Plant;
}

function PlantCard(props: PlantCardProps) {

    return (
        <Link className='shadow-2xl bg-green-100 rounded-md p-3 m-5 text-black' href={`/info/${props.plant.id}`}>
            <div className="flex flex-row">
                <img src={props.plant.default_image?.thumbnail} className="w-1/6 object-contain mr-2 my-2"/>
                <div>
                    <h3 className="text-green-900 text-2xl font-bold">{props.plant.common_name}</h3>
                    <p className="text-green-900">{props.plant.scientific_name}</p>
                    {props.plant.other_name && 
                        props.plant.other_name.length > 0 && 
                        props.plant.other_name.map((name, index) => {
                            return <p key={index} className="text-green-700">{name}</p>
                        })
                    }
                </div>
            </div>

            <hr className="mb-3 text-green-900" />

            <div className="w-full h-60 overflow-hidden flex justify-center items-center">
                <img
                    src={props.plant.default_image?.original_url}
                    className="object-cover w-full h-full"
                    alt={props.plant.common_name}
                />
            </div>
        </Link>
    );
}

export default PlantCard