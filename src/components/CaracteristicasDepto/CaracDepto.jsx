import { PiTelevisionFill } from "react-icons/pi";
import { MdBedroomParent } from "react-icons/md";
import { FaToilet } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";



const CaracDepto = () => {
    return(
    <div>
        <div className="grid grid-cols-3 gap-8 mx-10">
            <div className="col-span-1">
                <h2 className="text-center font-semibold text-xl">Caracteristicas</h2>
                <div className="mt-5"> 
                    <MdBedroomParent className="text-4xl mt-2" />
                    <FaToilet className="text-4xl mt-2"/>
                    <PiTelevisionFill className="text-4xl mt-2" />
                    <FaWifi className="text-4xl mt-2"/>
                </div>
            </div>
            <div className="col-span-2">
                <h2 className="text-center font-semibold text-xl">Descripcion</h2>
                <p className="">Descubre el encanto de Central Av Apart. Con su amplio espacio y comodidades, este departamento es ideal para 2 0 3 personas que desean explorar la hermosa ciudad de San Juan.

                La habitación cuenta con una cómoda cama matrimonial, armario y mueble brindando un espacio acogedor y funcional.

                La sala de estar cuenta con un cómodo sofá cama, donde puedes relajarte y disfrutar de momentos de descanso. La cocina está totalmente equipada, lo que te permite preparar tus comidas favoritas durante tu estadía. El comedor es ideal para compartir deliciosas comidas en familia o entre amigos.

                El departamento también incluye toallas y sábanas de calidad, Smart TV con servicio de cable y wifi gratuito, para que puedas mantenerte conectado durante tu estancia.

                ¡Reserva ahora el departamento y disfruta de una estancia cómoda y memorable en San Juan!</p>
            </div>
        </div>
    </div>
    )
}

export default CaracDepto
