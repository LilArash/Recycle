import { useEffect, useState } from "react"
import { DriverCard } from "../components/DriverCard"
import greentruck from "../images/greentruck.svg";
import orangetruck from "../images/orangetruck.svg";
import { LiveLocModal } from "../components/LiveLocModal";
export function DriversStatus() {

    const [drivers, setDrivers] = useState([])
    const [selectedDriver, setSelectedDriver] = useState(null)

    useEffect(() => {
        fetch('/DriverStatus.json')
            .then((res) => res.json())
            .then((data) => {
                setDrivers(data)
            })
    }, [])

    return (
        <div className="m-4 relative">

            {selectedDriver && (
                <LiveLocModal cords={selectedDriver} onClose={() => setSelectedDriver(null)} />
            )}

            <h1 className="text-2xl mb-4">وضعیت رانندگان</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                {


                    drivers.map((driver) => {
                        const rowIndex = Math.floor(driver.id % 2);

                        return <DriverCard borderColor={rowIndex === 0 ? "#22c55e" : "#fb923c"}
                            name={driver.name} tel={driver.tel} status={driver.status} id={driver.id}
                            image={rowIndex === 0 ? greentruck : orangetruck} onClick={() => setSelectedDriver(driver)} />
                    })


                }
            </div>
        </div>
    )
}