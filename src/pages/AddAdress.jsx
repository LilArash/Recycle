import { useState } from "react"
import Cookies from "js-cookie"
import { MapPicker } from "../components/MapPicker"
export function AddAdress() {

    const [location, setLocation] = useState(null)
    const [address, setAddress] = useState("")
    const [title, setTitle] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!location) {return alert("location")}
        

        const payload = {
            titel: title,
            text: address,
            latitude: location.lat.toString(),
            longitude: location.lng.toString(),
        };

        try {
            console.log(payload);
            
        } catch (err) {
            console.error(" خطا در ارسال:", err);
        }

    }

    return (

        <div className="m-4">
            <h1 className="text-2xl mb-4">افزودن آدرس</h1>
            <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-4">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <input type="text" name="" id="" placeholder="نام آدرس"
                        className="p-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" name="" id="" placeholder="متن آدرس"
                        className="p-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500 transition-colors" 
                        value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div>
                    <MapPicker onSelectLocation={setLocation} />
                </div>
                <button className="w-full p-2 rounded-lg outline-none border border-green-500 text-green-500
                hover:text-white hover:bg-green-500 transition-colors">
                    ثبت
                </button>
            </form>
        </div>
    )
}