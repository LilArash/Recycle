import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { motion, AnimatePresence } from "framer-motion"
import grayL from "../images/graylist.svg"
import greenL from "../images/greenlist.svg"
import grayU from "../images/grayupload.svg"
import greenU from "../images/greenupload.svg"
import { InputElement } from "../components/InputElement"
import { useState } from "react"
export function AddAward() {

    const [count, setCount] = useState(0)
    const [prevCount, setPrevCount] = useState(0)
    const [enable, setEnable] = useState("")
    const [step, setStep] = useState(1)

    function increment() {
        setCount(c => c + 1)
    }

    function decrement() {
        setCount(c => c - 1)
    }

    const isIncreasing = count > prevCount;

    // function handleImageSelect(file) {
    //     setBannerImage(file);
    //     setImageError(false);
    //     console.log("فایل انتخاب‌شده:", file);
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     let hasError = false

    //     if (!bannerImage) {
    //         setImageError(true);
    //         hasError = true;
    //         alert("لطفا یک تصویر برای بنر انتخاب کنید")
    //     }

    //     if (!bannerName.trim()) {
    //         setNameError(true);
    //         hasError = true;
    //         alert("لطفا یک نام برای بنر انتخاب کنید")
    //     }

    //     if (hasError) return;
    //     console.log("ارسال شد!", bannerImage, bannerName);
    // }

    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">افزودن جایزه</h1>
            <div className="flex flex-col">
                <div className="flex justify-around mb-2">
                    <img src={greenL} alt="green-list" />
                    <img src={step === 2 ? greenU : grayU} alt="gray-upload-icon" />
                </div>
                <div className="border rounded-lg">
                    <div className={`${step === 2 ? "w-full" : "w-1/2"} h-2 rounded-t-lg bg-green-500 transition-all duration-500`}></div>
                    <div className={`${step === 2 ? "hidden" : "flex"} flex-col md:flex-row justify-between m-4 gap-4`}>
                        <div className="flex flex-col w-full md:w-1/2 gap-4">
                            <input className="p-2 rounded-lg border focus:outline-none focus:border-green-500 transition-all" type="text" placeholder="نام جایزه" />
                            <div className="flex justify-between">
                                <span className="text-gray-500">تعداد ستاره های مورد نیاز</span>
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
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 *:w-full sm:*:w-1/2 *:p-2 *:text-center *:rounded-3xl *:border *:text-gray-400 *:cursor-pointer *:transition-all">
                                <div onClick={() => setEnable("enable")} className={`${enable === "enable" && "bg-green-100 !text-green-500 border-none"}`}>فعال</div>
                                <div onClick={() => setEnable("disable")} className={`${enable === "disable" && "bg-green-100 !text-green-500 border-none"}`}>غیر فعال</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:h-auto h-48">
                            <textarea className="w-full h-full p-2 rounded-lg outline-none border focus:border-green-500 transition-all" name="" id="" placeholder="توضیحات جایزه"></textarea>
                        </div>
                    </div>
                    <div className={`${step === 2 ? "block" : "hidden"} m-4`}>
                        <InputElement />
                    </div>
                    <div className="m-4">
                        <button onClick={() => setStep(s => s = 2)} className="w-full p-2 rounded-lg outline-none border border-green-500 text-green-500
                hover:text-white hover:bg-green-500 transition-colors">
                            {step === 2 ? "ثبت" : "بعدی"}
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}