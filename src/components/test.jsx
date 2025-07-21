import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
export function Test() {
    return (
        <div className=" m-4 p-4 flex flex-col border rounded-2xl relative group">
            <div className="w-[80%] h-12 bg-red-500 rounded-lg z-50"></div>
             <div className="w-[90%] h-12 bg-white border rounded-lg absolute group-hover:bg-green-500"></div>
        </div>
    )
}