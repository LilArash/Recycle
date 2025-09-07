import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faStar, faTrash, faEdit, faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import wcg from "../images/wcg.jpg"
import { useEffect, useState } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
export function RegAwardDetail() {
 
    const { id } = useParams()
    const [awardData, setAwardData] = useState(null)
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const data = location.state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/Award.json')
                const data = await res.json()
                const found = data.find((item) => String(item.id) === id)
                setAwardData(found || null)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

     if (loading) return <p className="m-8">درحال بارگذاری...</p>;
    if (!awardData) return <p className="m-8 text-red-500">جایزه ای با این شناسه یافت نشد</p>;

    return (
        <div className="m-8">
            <Link to="/registeredawards">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-gray-500" icon={faArrowRight} />
                    <p className="text-gray-500">بازگشت به صفحه جوایز</p>
                </div>
            </Link>
            <div className="max-w-4xl mx-auto mt-8">

                <div className="text-xs text-gray-500">04/05/11 10:33</div>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex flex-col justify-between w-full md:w-1/2">
                            <div className="space-y-2">
                                <h1 className="text-xl text-gray-700">{awardData.name}</h1>
                                <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">امتیاز‌های مورد نیاز</span>
                                    <div className="flex items-baseline">
                                        <span className="text-yellow-500">{awardData.neededPoint}</span>
                                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">تاریخ آپدیت</span>
                                    <span className="text-sm text-gray-500">{awardData.lastUpdate}</span>
                                </div>
                            </div>

                            <div className="flex justify-between w-full items-center mt-6 mb-0 py-4">
                                <div className="flex items-center gap-2">
                                    <div className={`px-4 py-3 border cursor-pointer rounded-lg flex justify-center group items-center hover:border-green-500 transition-all ${awardData.status === "فعال" && "bg-green-500"}`}>
                                        <FontAwesomeIcon className={`text-gray-300 ${awardData.status === "فعال" && "text-white"}`} icon={faCircleCheck} />
                                    </div>
                                    <div className={`px-4 py-3 border cursor-pointer rounded-lg flex justify-center group items-center hover:border-green-500 transition-all ${awardData.status === "غیر فعال" && "bg-green-500"}`}>
                                        <FontAwesomeIcon className={`text-gray-300 ${awardData.status === "غیر فعال" && "text-white"}`} icon={faBan} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="px-4 py-3 border cursor-pointer rounded-lg flex justify-center items-center group hover:bg-blue-400 transition-all">
                                        <FontAwesomeIcon className="text-gray-300 group-hover:text-white transition-all" icon={faEdit} />
                                    </div>
                                    <div className="px-4 py-3 border cursor-pointer rounded-lg flex justify-center items-center group hover:bg-red-400 transition-all">
                                        <FontAwesomeIcon className="text-gray-300 group-hover:text-white transition-all" icon={faTrash} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-4 md:mt-0">
                            <img className="rounded-lg h-48 w-full" src={wcg} alt="award-pic" />
                        </div>
                    </div>

                </div>
                <div className="mt-8">
                    <p className="text-slate-500 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </div>
        </div>
    )
}