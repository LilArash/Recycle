import { MapComponent } from "./MapComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export function AddressCard({ title, address, number, lng, lat }) {
    const [showMap, setShowMap] = useState(false)


    return (
        <div onClick={() => setShowMap((s) => !s)} className="flex relative flex-col border rounded-lg gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 rounded-lg my-4 mr-0 pr-0 ">
                    <div className="bg-green-500 rounded-l-full p-4 text-center">
                        <p className="text-3xl text-white ">{number}</p>
                    </div>
                    <div>
                        <h2 className="text-gray-700 text-xl">{title}</h2>
                        <p className="text-gray-400">{address}</p>
                    </div>

                </div>
                <div className="m-4  ">
                    <FontAwesomeIcon className="text-green-500 " icon={faExternalLink} />
                </div>
            </div>
            {
                showMap && (
                   
                        <div className="p-4 pt-0 absolute  z-50 w-full h-56">
                            <MapComponent latitude={lat} longitude={lng} />
                        </div>

                )
            }
        </div>
    )
}