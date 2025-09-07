import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSuitcase } from "@fortawesome/free-solid-svg-icons"
import map from "../images/map.svg"
export function DriverLocCard({ id, name, status }) {
    return (
        <div className="relative cursor-pointer rounded-xl overflow-hidden">
            
            <div className={`relative z-10 flex justify-between rounded-xl`}
                style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(to right, #e5e7eb, #22c55e) border-box`,
                    borderRadius: "0.75rem",
                    border: "1px solid transparent",
                    borderRight : "8px solid transparent"
                }}>
                <div className="flex flex-col px-4 py-4">
                    <span className="text-gray-700 gap-2 text-lg">
                        {name} #{id}
                    </span>
                    <div className="pr-4">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon className="text-gray-400" icon={faSuitcase} />
                            <p className="text-gray-400">وضعیت: {status}</p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 top-0 -z-10 ">
                    <img className="" src={map} alt="map-img" />
                </div>
            </div>
        </div>
    )
}