import { MapComponent } from "../components/MapComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumpster, faPlug, faSkullCrossbones, faSun, faChevronDown, faEdit, faExternalLink, faPlus } from "@fortawesome/free-solid-svg-icons"
import { faSun as regSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"


export function AddRequest() {

    const [addresses, setAddresses] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [selectdeAddress, setSelectedAddress] = useState(null)


    
    useEffect(() => {
        fetch('/AddressList.json')
            .then((res) => res.json())
            .then((data) => {
                setAddresses(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">ثبت درخواست جمع‌آوری</h1>
            <form className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex w-full md:w-2/3">
                        <div className="flex flex-col w-full items-start z-50">
                            <div className="w-full border rounded-lg my-2 py-2 px-4 ">
                                <div onClick={() => setIsShow(!isShow)} className=" flex justify-between items-center  text-gray-500">
                                    {selectdeAddress ? selectdeAddress.title : "انتخاب آدرس" } 
                                    <FontAwesomeIcon className={`text-gray-400 ${isShow && "rotate-180"} transition-all duration-300`} icon={faChevronDown} />
                                </div>

                                {isShow && (
                                    <div className="mt-4 w-full ">
                                        {addresses.map((address) => (
                                            <div onClick={() => {
                                                setSelectedAddress(address)
                                                setIsShow(false)
                                            }} key={address.id} className="flex justify-between items-center mb-4 cursor-pointer">
                                                <div className="flex flex-col gap-1">
                                                    <h2 className="text-xl text-gray-700">{address.title}</h2>
                                                    <span className="text-gray-500">{address.address}</span>
                                                </div>
                                                <FontAwesomeIcon className="text-gray-500" icon={faEdit} />
                                            </div>
                                        ))
                                            
                                        }
                                        <div className="flex justify-center gap-2">
                                            <div className="flex gap-1 items-center cursor-pointer">
                                                <span className="text-sm text-green-500">مشاهده همه</span>
                                                <FontAwesomeIcon className="text-sm text-green-500" icon={faExternalLink} />
                                            </div>
                                            <span className=" text-green-500">|</span>
                                            <div className="flex gap-1 items-center cursor-pointer">
                                                <span className="text-sm text-green-500">افزودن آدرس</span>
                                                <FontAwesomeIcon className="text-sm text-green-500" icon={faPlus} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                )}

                            </div>
                            <div className="mt-2 w-full">
                                <span className="text-sm p-1 text-gray-500">نوع زباله</span>
                                <div className="flex flex-col sm:flex-row justify-stretch gap-2 text-gray-300 mt-1 w-full 
                            *:flex *:justify-between *:items-center *:border *:px-4 *:py-2 *:rounded-2xl mx-2 *:w-full *:sm:1/3">
                                    <div>
                                        خشک
                                        <FontAwesomeIcon icon={faDumpster} />
                                    </div>
                                    <div>
                                        الکترونیکی
                                        <FontAwesomeIcon icon={faPlug} />
                                    </div>
                                    <div>
                                        خطرناک
                                        <FontAwesomeIcon icon={faSkullCrossbones} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 w-full">
                                <span className="text-sm p-1 text-gray-500">مقدار</span>
                                <div className="flex flex-col sm:flex-row justify-stretch gap-2 text-gray-300 mt-1 w-full 
                            *:text-center *:border *:px-4 *:py-2 *:rounded-2xl mx-2 *:w-full *:sm:1/3">
                                    <div>
                                        کم
                                    </div>
                                    <div>
                                        متوسط
                                    </div>
                                    <div>
                                        زیاد
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 w-full">
                                <span className="text-sm p-1 text-gray-500">زمان دریافت زباله</span>
                                <div className="flex flex-col sm:flex-row justify-stretch gap-2 text-gray-300 mt-1 w-full 
                            *:flex *:justify-center *:gap-2 *:items-center *:border *:px-4 *:py-2 *:rounded-2xl mx-2 *:w-full *:sm:1/3">
                                    <div>
                                        <FontAwesomeIcon icon={regSun} />
                                        8 الی 12
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faSun} />
                                        12 الی 17
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faMoon} />
                                        17 الی 21
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <button className="hidden md:block button-styles">
                                    ثبت
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mx-2 h-64 md:h-auto md:max-h-[22rem]">
                    
                        <MapComponent latitude="1" longitude="1" height="full" width="full" />
                    </div>
                </div>
                <div>
                    <button className="md:hidden block button-styles">
                        ثبت
                    </button>

                </div>
            </form>
        </div>
    )
    
}