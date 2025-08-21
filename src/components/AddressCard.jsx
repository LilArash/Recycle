import { MapComponent } from "./MapComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import greenbg from "../images/greenbg.svg"

export function AddressCard({ title, address, number, lng, lat }) {
    const [showMap, setShowMap] = useState(false)


    return (
        <div onClick={() => setShowMap((s) => !s)} className={`flex relative flex-col group ${showMap ? "border border-green-500" : "border"} rounded-xl gap-2 cursor-pointer group`}>
            <div className="flex justify-between items-center ">
                <div className="flex items-center justify-between w-full gap-4 rounded-xl  mr-0 pr-0  h-full relative">
                    <div className={`flex items-center justify-between bg-white h-full rounded-xl w-full hover:w-[90%] transition-all duration-300 py-[1.3rem] ${!showMap && "group-active:border-[3px] group-active:border-green-500 group-active:duration-75 group-active:w-[90%]"} `}>
                        <div className="flex justify-start items-center gap-2">
                            <div className="  pr-0">
                                <div className="flex items-center justify-start relative">
                                    <div
                                        style={{
                                            backgroundImage: `url(${greenbg})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "contain",
                                            
                                        }}
                                        className="size-[3.5rem] flex items-center justify-center relative text-white text-xl right-[-5px]"
                                    >
                                        {number}
                                    </div>
                                </div>

                            </div>

                            <div className="relative right-[-5px]">
                                <h2 className="text-gray-700 text-xl">{title}</h2>
                                <p className="text-gray-400">{address}</p>
                            </div>
                        </div>
                        <FontAwesomeIcon className={`text-green-500 z-50 pl-6 delay-200 ${!showMap && " group-hover:hidden group-hover:delay-1000"} ${showMap && "hidden"}`} icon={faExternalLink} />
                    </div>
                    <div className={`p-4 md:pl-6 rounded-xl flex justify-end items-center gap-2 w-[100%] h-full absolute -z-10 
                    ${!showMap && "group-hover:bg-green-500"}  transition-colors`}>
                        <FontAwesomeIcon className={`text-green-500 z-50 relative ${!showMap && "group-hover:text-white"}`} icon={faExternalLink} />
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