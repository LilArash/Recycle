import { useEffect, useState } from "react"
import { DriverLocCard } from "../components/DriverLocCard"
export function DriverLoc() {
    const [drivers, setDrivers] = useState([])
    useEffect(() => {
        fetch('/DriverStatus.json')
            .then((res) => res.json())
            .then((data) => {
                setDrivers(data)
            })
    }, [])
    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">موقعیت رانندگان</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                {
                    drivers.map((driver) => {
                        return <DriverLocCard name={driver.name} status={driver.status} key={driver.id} id={driver.id} />
                    })
                }
            </div>
        </div>
    )
}