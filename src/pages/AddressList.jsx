import { useEffect, useState } from "react";
import { AddressCard } from "../components/AddressCard";
export function AddressList() {
    const [addresses, setAddresses] = useState([])
    useEffect(() => {
        fetch("/AddressList.json")
            .then((res) => res.json())
            .then((data) => {
                setAddresses(data);
                console.log("addresses:", data);
            });
    }, []);
    return (
        <div className="m-4">
            <h1 className="text-2xl mb-4">آدرس ها</h1>
            <div className="grid grid-cols-2 gap-4">
                {
                    addresses.map((address, index) => {

                        return <AddressCard key={address.id}
                            title={address.title}
                            address={address.address}
                            number={index + 1}
                            lng={address.lng}
                            lat={address.lat}
                            />
                    })
                }
            </div>
        </div>
    )
}