import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSkullCrossbones, faSun } from "@fortawesome/free-solid-svg-icons"
export function RequestCard({ id, amount, type, time, timeIcon, typeIcon, timeColor, typeColor }) {

    function getBarAmount() {
        switch (amount?.trim()) {
            case "کم":
                return 1;
            case "متوسط":
                return 2;
            case "زیاد":
                return 3;
            default:
                return 0;
        }
    }

    function getBarColor() {
        switch (amount?.trim()) {
            case "کم":
                return "bg-green-500";
            case "متوسط":
                return "bg-orange-400";
            case "زیاد":
                return "bg-red-500";
            default:
                return "bg-gray-300";
        }
    }

    const barAmount = getBarAmount();
    const barColor = getBarColor();
    console.log(amount);
    

    return (
        <div className="p-4 rounded-lg flex justify-between border">
            <div className="flex flex-col ">
                <span className="text-xl">درخواست #{id}</span>
                <div className="*:text-gray-400 mr-4 mt-2">
                    <p>مقدار: {amount}</p>
                    <p>زباله {type}</p>
                    <p>زمان تحویل زباله: {time}</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-4">
                <span className="size-2 block rounded-full bg-green-500"></span>
                <div className="flex flex-row-reverse gap-1 mt-2 *:h-2 *:w-24 *:rounded-3xl ">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={`h-2 w-20 rounded-full ${i < barAmount ? barColor : "bg-gray-300"
                                }`}
                        ></div>
                    ))}
                </div>
                <FontAwesomeIcon className={typeColor} icon={typeIcon} />
                <FontAwesomeIcon className={timeColor} icon={timeIcon} />
            </div>
        </div>
    )
}