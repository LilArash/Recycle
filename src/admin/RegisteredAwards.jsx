import { RegAwardCard } from "../components/RegAwardCard"
import { useState, useEffect } from "react"
export function RegisteredAwards() {
    const [awards, setAwards] = useState([])

    useEffect(() => {
            fetch('/Award.json')
            .then((res) => res.json())
            .then((data) => setAwards(data))
        }, [])

    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">جوایز ثبت شده</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {awards.map((award) => {
                    return <RegAwardCard name={award.name}
                    lastUpdate={award.lastUpdate}
                    neededPoint={award.neededPoint}
                    status={award.status} key={award.id} id={award.id} />
                })}
            </div>
        </div>
    )
}