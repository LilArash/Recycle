import { MapComponent } from "./MapComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export function AddressCard({ title, address, number, lng, lat }) {
    const [showMap, setShowMap] = useState(false)


    return (
        <div onClick={() => setShowMap((s) => !s)} className={`flex relative flex-col ${showMap ? "border border-green-500" : "border"} rounded-xl gap-2 cursor-pointer group`}>
            <div className="flex justify-between items-center ">
                <div className="flex items-center justify-between w-full gap-4 rounded-xl  mr-0 pr-0  h-full relative">
                    <div className={"flex items-center gap-6 bg-white h-full rounded-xl w-[90%] py-6"}>
                        <div className=" rounded-l-full text-center flex items-center justify-start">
                            <div style={{
                                clipPath: 'polygon(74% 9%, 100% 0, 100% 100%, 74% 90%)'
                            }} className="bg-green-500 size-10 rounded-r-sm"></div>
                            <div style={{
                                right: '0.3rem'
                            }} 
                            className="h-8 absolute w-12 rounded-l-full rounded-r-lg bg-green-500 text-white flex items-center justify-center">
                                <p className="text-2xl ">{number}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-gray-700 text-xl">{title}</h2>
                            <p className="text-gray-400">{address}</p>
                        </div>
                    </div>
                    <div className={`p-4 md:pl-6 rounded-xl flex justify-end items-center gap-2 w-[100%] h-full absolute -z-10 
                    ${!showMap && "group-hover:bg-green-500"}  transition-colors`}>
                        <FontAwesomeIcon className={`text-green-500 ${!showMap && "group-hover:text-white"}`} icon={faExternalLink} />
                        {
                            showMap && (
                                <FontAwesomeIcon className={`text-green-500 ${!showMap && "group-hover:text-white"} `} icon={faTrashCan} />
                            )
                        }
                    </div>
                </div>

            </div>
            {
                showMap && (

                    <div className="p-4 bg-white border border-green-500 border-t-0 rounded-b-xl h-80 top-[4.5rem] absolute z-50 w-full">
                        <MapComponent latitude={lat} longitude={lng} width="full" height="full" />
                    </div>

                )
            }
        </div>
    )
}