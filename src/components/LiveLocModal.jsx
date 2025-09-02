import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { MapComponent } from "./MapComponent"
export function LiveLocModal( {cords, onClose} ) {
    return (
        <div onClick={onClose} className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 animate-showList">
            <div onClick={(e) => e.stopPropagation()} className="bg-white w-11/12 sm:w-4/5 md:w-2/3 lg:w-3/5 rounded-xl shadow-lg">
                <div className="m-4">
                    <div className="flex justify-between items-center">
                        <span>وضعیت زنده</span>
                        <FontAwesomeIcon onClick={onClose} className="text-gray-400 cursor-pointer" icon={faClose} />
                    </div>
                    <div className="w-full h-96 rounded-lg mt-4">
                        <MapComponent width="full" height="full" longitude={cords.lng} latitude={cords.lat}/>
                    </div>
                </div>
            </div>
        </div>
    )
}