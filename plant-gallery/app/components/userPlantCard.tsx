import Link from "next/link";
import { GardenPlant, useAppContext } from "@/context/context";

interface UserPlantCardProps {
    plant: GardenPlant;
}

function UserPlantCard(props: UserPlantCardProps) {
    const { user, setUser } = useAppContext();

    function removeFromGarden() {
        if (!user) return;

        const newGarden = user.garden.filter((x) => x.gardenId !== props.plant.gardenId)

        setUser({
            username: user.username,
            garden: newGarden,
        })

        console.log(props.plant.common_name + " removed from " + user?.username + "'s garden")
    }

    return (
        <div className='shadow-2xl bg-white rounded-md p-3 m-5 text-black'>
            <Link href={`/info/${props.plant.id}`}>
                <div className="flex flex-row">
                    <img src={props.plant.default_image?.thumbnail} className="w-1/4 object-contain mr-2 my-2 rounded-sm" alt={props.plant.common_name} />
                    <div>
                        <h3 className="text-green-900 text-2xl font-bold">{props.plant.common_name}</h3>
                        <p className="text-green-900">{props.plant.scientific_name}</p>
                        <hr className="my-2 text-green-900" />
                        {props.plant.other_name && 
                            props.plant.other_name.length > 0 && 
                            props.plant.other_name.map((name, index) => {
                                return <p key={index} className="text-green-700">{name}</p>
                            })
                        }
                    </div>
                </div>
            </Link>
            <div className="flex justify-center">
                <button onClick={removeFromGarden} className="bg-green-400 p-2 px-4 rounded-md text-xl font-bold hover:bg-green-500 hover:shadow-md text-white mt-2">Remove from Garden</button>
            </div>
        </div>
        
    );
}

export default UserPlantCard