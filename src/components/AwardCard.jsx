import cg from "../images/cg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"


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
    const [prevCount, setPrevCount] = useState(0);

    function increment() {
        setPrevCount(count);
        setCount(c => c + 1)
    }

    function decrement() {
        setPrevCount(count);
        setCount(c => c - 1)
    }
    const isIncreasing = count > prevCount;

    return (
        <div className="relative border rounded-xl w-full shadow-sm group cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
            <div onClick={handleClick} className="flex gap-4 p-4">
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
                <div className="border-l size-7 rounded-l-full bg-white group-hover:border-l-green-500 transition-all"></div>
            </div>
            <div className="absolute top-[11rem] -left-4">
                <div className="border-r size-7 rounded-r-full bg-white group-hover:border-r-green-500 transition-all"></div>
            </div>


            <div className="flex justify-between items-center m-4 mb-0 py-4 border-t border-dashed">
                <p>{neededPoint} امتیاز</p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon onClick={increment} className="text-gray-200 cursor-pointer" icon={faPlus} />
                        <div className="relative h-6 w-6 overflow-hidden bg-gray-200 p-1 rounded-lg flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={count}
                                    initial={{ y: isIncreasing ? 10 : -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: isIncreasing ? -10 : 10, opacity: 0 }}
                                    transition={{ duration: 0.1 }}
                                    className="absolute"
                                >
                                    {count}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        <FontAwesomeIcon onClick={() => { count > 0 && decrement() }} className="text-gray-200 cursor-pointer" icon={faMinus} />
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