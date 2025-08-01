import cg from "../images/cg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function AwardCard({ id, name, lastUpdate, neededPoint }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/Awards/${id}`,
            {
                state: {
                    id, name, lastUpdate, neededPoint
                }
            }
        )
    }

    const [count, setCount] = useState(0)

    function increment() {
        setCount(c => c + 1)
    }

    function decrement() {
        setCount(c => c - 1)
    }

    return (
        <div onClick={handleClick} className="relative border rounded-xl w-full">
            <div className="flex gap-4 p-4">
                <div className="size-36 rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover" src={cg} alt="award-icon" />
                </div>
                <div className="gap-2">
                    <span className="text-gray-700 text-2xl">{name}</span>
                    <p className="text-gray-500 font-light">آپدیت در: {lastUpdate}</p>
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <p className="text-gray-500 font-light group-hover:text-green-500 transition-all">جزییات بیشتر</p>
                        <FontAwesomeIcon className="text-gray-400 group-hover:text-green-500 transition-all" icon={faAngleLeft} />
                    </div>
                </div>
            </div>

            
            <div className="absolute top-[11rem] -right-4">
                <div className="border-l size-7 rounded-l-full bg-white"></div>
            </div>
            <div className="absolute top-[11rem] -left-4">
                <div className="border-r size-7 rounded-r-full bg-white"></div>
            </div>
            
            
            <div className="flex justify-between items-center m-4 mb-0 py-4 border-t border-dashed">
                <p>{neededPoint} امتیاز</p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon onClick={increment} className="text-gray-200 cursor-pointer" icon={faPlus} />
                        <p className="bg-gray-200 p-1 rounded-lg">{count}</p>
                        <FontAwesomeIcon onClick={() => {count > 0 && decrement()}} className="text-gray-200 cursor-pointer" icon={faMinus} />
                    </div>
                    <div className="bg-green-500 border border-green-500 rounded-lg flex items-center gap-2 px-4 py-2 hover:bg-white 
                *:text-white *:hover:text-green-500 transition-all *:transition-all cursor-pointer">
                        <p className="text-gray-700">دریافت جایزه</p>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                </div>
            </div>
        </div>

    )
}