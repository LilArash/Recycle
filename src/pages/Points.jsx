import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGift, faAngleLeft, faStar } from "@fortawesome/free-solid-svg-icons"
import Gift from "../images/Gift.svg"
import { AwardCard } from "../components/AwardCard"
export function Points() {
    return (
        <div className="m-4">
            <div className="flex w-full justify-between gap-4 items-center">
                <div className="flex flex-col w-full lg:w-[80%]">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row justify-between w-full">
                            <h1 className="text-3xl">امتیازات و جوایز</h1>
                            <div className="flex gap-2 items-center mt-2 sm:mt-0">
                                <FontAwesomeIcon className="text-green-500" icon={faGift} />
                                <p className="text-green-500">مشاهده جوایز دریافت شده</p>
                                <FontAwesomeIcon className="text-green-500" icon={faAngleLeft} />
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400 text-justify">
                                در این بخش، شما می‌توانید جوایز خود را مشاهده و دریافت کنید! با فعالیت بیشتر در پلتفرم ما، شانس خود را برای کسب جوایز جذاب و هیجان‌انگیز افزایش دهید. همین حالا اقدام کنید و از مزایای ویژه بهره‌مند شوید!
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="flex flex-col lg:flex-row gap-4 w-full lg:*:w-1/3 mt-8">
                        <div className="flex justify-between py-2 px-4 bg-green-100 rounded-lg">
                            <div>
                                <FontAwesomeIcon className="text-green-500" icon={faStar} />
                                <span className="text-slate-400 mr-2 font-light">امتیاز شما:</span>
                            </div>
                            <span className="text-slate-400 font-light">
                                1234 امتیاز
                            </span>
                        </div>
                        <div className="flex justify-between py-2 px-4 bg-yellow-50 rounded-lg">
                            <div>
                                <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                                <span className="text-slate-400 mr-2 font-light">همه امتیازات:</span>
                            </div>
                            <span className="text-slate-400 font-light">
                                1234 امتیاز
                            </span>
                        </div>
                        <div className="flex justify-between py-2 px-4 border rounded-lg">
                            <div>
                                <FontAwesomeIcon className="text-slate-300" icon={faStar} />
                                <span className="text-slate-400 mr-2 font-light">استفاده شده:</span>
                            </div>
                            <span className="text-slate-400 font-light">
                                1234 امتیاز
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] h-auto hidden lg:block">
                    <img className="w-full" src={Gift} alt="gift-image" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <AwardCard />
                <AwardCard />
                <AwardCard />
                <AwardCard />
                <AwardCard />
                <AwardCard />
            </div>
        </div>
    )
}