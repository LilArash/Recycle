import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faSkullCrossbones, faTrashCan, faClockFour, faWeightScale, faTruck, faCalendarCheck, faStar, faDumpster, faPlug } from "@fortawesome/free-solid-svg-icons"
import { AmountBar } from "../components/AmountBar"
import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function AllRequestDetail() {

    const { id } = useParams();
    const [requestData, setRequestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation()
    const data = location.state



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/AllRequests.json')
                const data = await res.json()

                const found = data.find((item) => String(item.id) === id)
                setRequestData(found || null)
                console.log(data);

            } catch (err) {
                console.error(err)
                setRequestData(null)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

    const typeIcon = requestData ? getTypeIcon(requestData.type) : null;


    function getTypeIcon(type) {
        switch (type) {
            case "خشک":
                return { icon: faDumpster, color: 'text-yellow-500' };
            case "الکترونیکی":
                return { icon: faPlug, color: 'text-green-500' };
            case "خطرناک":
                return { icon: faSkullCrossbones, color: 'text-orange-500' };
            default:
                return { icon: faDumpster, color: 'text-gray-500' };
        }
    }

    if (loading) return <p className="m-8">در حال بارگذاری...</p>;
    if (!requestData) return <p className="m-8 text-red-500">درخواستی با این شناسه یافت نشد</p>;


    return (
        <div className="m-8">
            <Link to="/requests">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-gray-500" icon={faArrowRight} />
                    <p className="text-gray-500">بازگشت به صفحه درخواست ها</p>
                </div>
            </Link>
            <div className="flex justify-between mt-6">
                <div className="flex flex-col w-full">
                    <span className="text-xs text-gray-500">04/05/10 14:58</span>
                    <div className="flex justify-between w-full items-center">
                        <h1 className="text-xl text-gray-700">درخواست #{requestData.id}</h1>
                        <FontAwesomeIcon className="text-gray-500 text-xl" icon={faTrashCan} />
                    </div>
                    <div className="mr-4 mt-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">وضعیت درخواست:</span>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-400">{requestData.status}</span>
                                <div className="size-4 rounded-full flex items-center justify-center">
                                    <div className="size-2 bg-orange-500 rounded-full animate-pulse-shadow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center flex-wrap">
                            <span className="text-gray-500">مقدار: {requestData.amount}</span>
                            <AmountBar amount={requestData.amount} size="w-16 sm:w-24 md:w-32" />
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon className={`${typeIcon.color} text-xl`} icon={typeIcon.icon} />
                            <span className="text-gray-500">زباله {requestData.type}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faClockFour} />
                            <span className="text-gray-500">زمان تحویل زباله: {requestData.deliverTime}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon className="text-slate-400 text-xl" icon={faWeightScale} />
                            <span className="text-gray-500">وزن: {requestData.weight} کیلوگرم</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon className="text-slate-400 text-lg" icon={faTruck} />
                            <span className="text-gray-500">نام راننده: {requestData.driver} </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon className="text-green-500 text-xl" icon={faCalendarCheck} />
                            <span className="text-gray-500">زمان دریافت زباله: {requestData.reciveTime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">امتیازهای دریافتی</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-yellow-500">{requestData.recievingPoints}</span>
                                <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 mr-4">
                        <p className="text-gray-500">
                            • {requestData.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}