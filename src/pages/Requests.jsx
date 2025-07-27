import { useEffect, useState } from "react"
import { faDumpster, faPlug, faSkullCrossbones, faSun } from "@fortawesome/free-solid-svg-icons"
import { faSun as regSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import NotFound from "../images/NotFound.svg"
import { RequestCard } from "../components/RequestCard"
export function Requests() {
    const [requests, setRequest] = useState([])

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

    function getTimeIcon(time) {
        if (time.includes("8-12")) {
            return { icon: regSun, color: 'text-green-500' };
        } else if (time.includes("12-17")) {
            return { icon: faSun, color: 'text-yellow-500' };
        } else {
            return { icon: faMoon, color: 'text-black' };
        }
    }

    useEffect(() => {
        fetch('/Requests.json')
            .then((res) => res.json())
            .then((data) => {
                setRequest(data);
                console.log(data);

            })

    }, [])

    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">درخواست ها</h1>
            {

                requests.length === 0 ?
                    <div className="flex flex-col justify-center items-center min-h-[70vh]">
                        
                            <div>
                                <img src={NotFound} alt="not-found-icon" />
                            </div>
                            <h2 className="text-lime-500 text-3xl">
                                درخواستی یافت نشد!
                            </h2>
                        
                    </div> :
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                        {

                            requests.map((request) => {

                                const typeIcon = getTypeIcon(request.type);
                                const timeIcon = getTimeIcon(request.deliverTime);

                                return <RequestCard key={request.id} id={request.id}
                                    type={request.type}
                                    time={request.deliverTime}
                                    amount={request.amount}
                                    typeIcon={typeIcon.icon}
                                    timeIcon={timeIcon.icon}
                                    typeColor={typeIcon.color}
                                    timeColor={timeIcon.color} />
                            })
                        }
                    </div>
            }
        </div>
    )
}