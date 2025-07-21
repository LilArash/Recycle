import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
export function Test() {
    return (
        <div className="flex border h-10 rounded-lg m-4 justify-between items-center group">
            <div className="bg-red-500 h-full w-[90%] rounded-lg">

            </div>
            <FontAwesomeIcon className=" group-hover:bg-green-500 h-full size-5 w-[10%]" icon={faExternalLink} />
            
        </div>
    )
}