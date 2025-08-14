export function AmountBar({ amount, size = "md" }) {

    const widthClass = size === "sm"
        ? "w-16"
        : size === "lg"
        ? "w-40"
        : size === "md"
        ? "w-32"
        : size;

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
    return (
        <div className={`flex flex-row-reverse gap-1`}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={`h-2 ${widthClass} rounded-full ${i < barAmount ? barColor : "bg-gray-300"
                        }`}
                ></div>
            ))}
        </div>
    )
}