import Link from "next/link";
import { Plant } from "../types";
import { useAppContext } from "@/context/context";
import { v4 as uuidv4 } from "uuid";

interface PlantCardProps {
    plant: Plant;
}

function PlantCard(props: PlantCardProps) {

    const { user, setUser } = useAppContext();

    function addToGarden() {
        if (!user) return;

        const newPlant = {
            ...props.plant,
            gardenId: uuidv4(),
        }

        setUser({
            username: user.username,
            garden: [...user.garden, newPlant]
        })

        console.log("added to " + user?.username + "'s garden")
    }

    return (
    <div className='shadow-2xl bg-white rounded-md p-3 m-5 text-black'>
        <Link href={`/info/${props.plant.id}`}>
            <div className="flex flex-row">
                <img src={props.plant.default_image?.thumbnail} className="w-1/6 object-contain mr-2 my-2 rounded-sm"/>
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
        {user?.username && (
            <div className="flex justify-center">
                <button onClick={addToGarden} className="bg-green-400 p-2 px-4 rounded-md text-xl font-bold hover:bg-green-500 hover:shadow-md text-white mt-2">Add to Garden</button>
            </div>
        )}
        
    </div>
        
    );
}

//        



export default PlantCard