import cg from "../images/wcg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
export function RegAwardCard({ id, name, lastUpdate, neededPoint, status }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/registeredawards/${id}`,
            {
                state: {
                    id, name, lastUpdate, neededPoint, status
                }
            }
        )
        console.log(id);
        
    }
    return (
        <div className="relative border rounded-xl w-full shadow-sm group cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
            <div onClick={handleClick}  className="flex gap-4 p-4">
                <div className="size-36 rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover" src={cg} alt="award-icon" />
                </div>
                <div className="gap-2">
                    <span className="text-gray-700 text-2xl">{name}</span>
                    <p className="text-gray-500 font-light">آپدیت در: {lastUpdate}</p>
                    <p className="text-gray-500 font-light">وضعیت: {status}</p>
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <p className="text-gray-500 font-light group-hover:text-green-500 transition-all">جزییات بیشتر</p>
                        <FontAwesomeIcon className="text-gray-400 group-hover:text-green-500 transition-all" icon={faAngleLeft} />
                    </div>
                </div>
            </div>


            <div className="absolute top-[11rem] -right-4">
                <div className="border-l size-7 rounded-l-full bg-white group-hover:border-l-green-500 transition-all"></div>
            </div>
            <div className="absolute top-[11rem] -left-4">
                <div className="border-r size-7 rounded-r-full bg-white group-hover:border-r-green-500 transition-all"></div>
            </div>


            <div className="flex justify-between items-center m-4 mb-0 py-4 border-t border-dashed">
                <span>{neededPoint} امتیاز</span>
                <div className="flex items-center gap-2">
                    <div className="px-4 py-3 cursor-pointer bg-blue-400 rounded-lg flex justify-center items-center">
                        <FontAwesomeIcon className="text-white" icon={faEdit} />
                    </div>
                     <div className="px-4 py-3 cursor-pointer bg-red-400 rounded-lg flex justify-center items-center">
                        <FontAwesomeIcon className="text-white" icon={faTrash} />
                    </div>
                </div>
            </div>
        </div>
    )
}