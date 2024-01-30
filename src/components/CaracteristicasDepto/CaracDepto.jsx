import { PiTelevisionFill } from "react-icons/pi";
import { MdBedroomParent } from "react-icons/md";
import { FaToilet } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";



const CaracDepto = () => {
    return(
    <div>
        <div className="grid grid-cols-2 gap-8 mx-10">
            <div className="border">
                <h2 className="text-center font-semibold text-xl">Caracteristicas</h2>
                <div className="ml-20 mt-10"> 
                    <MdBedroomParent className="text-4xl mt-2" />
                    <FaToilet className="text-4xl mt-2"/>
                    <PiTelevisionFill className="text-4xl mt-2" />
                    <FaWifi className="text-4xl mt-2"/>
                </div>
            </div>
            <div className="border">
                <h2 className="text-center font-semibold text-xl">Descripcion</h2>
                <p className="mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt officiis culpa, beatae nobis dolore quisquam incidunt magnam cum aperiam voluptate voluptatem reprehenderit dolor vel ullam quo, a pariatur aliquam!</p>
            </div>
        </div>
    </div>
    )
}

export default CaracDepto
