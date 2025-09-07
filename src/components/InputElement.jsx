import { useRef, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import addcirle from "../images/addcircle.svg"
export function InputElement({ onImageSelect, error = false, initialPreview = null }) {
    const fileInputRef = useRef(null)
    const [preview, setPreview] = useState(null)
    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {
        if (initialPreview && !preview) {
            setPreview(initialPreview);
        }
    }, [initialPreview]);

    function handleClick() {
        fileInputRef.current.click();
    }

    function handleChange(event) {
        const file = event.target.files[0]
        previewFile(file);
        onImageSelect?.(file);

    }

    function handleDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        previewFile(file);
        onImageSelect?.(file);
    }

    function handleDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
    }

    function handleDragLeave() {
        setIsDragging(false);
    }

    function previewFile(file) {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("لطفاً فقط عکس انتخاب کنید.");
        }
    }


    return (
        <div
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-full h-[350px] border-4 border-dashed flex justify-center items-center rounded-md cursor-pointer transition-all 
            ${isDragging ? "border-green-400 bg-green-50" : error ? "border-red-500" : "border-gray-300"}`}
        >
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
            />

            {preview ? (
                <img
                    src={preview}
                    alt="پیش‌نمایش"
                    className="w-full h-full object-cover rounded-md"
                // استایل برای اینکه عکس کل کادر رو نگیره
                // max-h-full max-w-full object-contain rounded-md 
                />
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <img className="size-14" src={addcirle} alt="add-icon" />
                    <h2 className="text-gray-500 mt-8">کلیک کنید یا درگ کنید</h2>
                </div>
            )}
        </div>
    )
}