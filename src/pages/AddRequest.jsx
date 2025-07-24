import { MapComponent } from "../components/MapComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumpster, faPlug, faSkullCrossbones, faSun, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faSun as regSun, faMoon } from "@fortawesome/free-regular-svg-icons"


export function AddRequest() {

    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">ثبت درخواست جمع‌آوری</h1>
            <form className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex w-full md:w-2/3">
                        <div className="flex flex-col w-full items-start ">
                            <div className="w-full flex justify-between items-center my-2 py-2 px-4 border rounded-lg text-gray-500">
                                انتخاب آدرس
                                <FontAwesomeIcon className="text-gray-500" icon={faChevronDown} />
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
                    <div className="w-full md:w-1/3 mx-2 h-64 md:h-auto">
                        <MapComponent latitude="20" longitude="20" height="full" width="full" />
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