'use client'

import { useEffect, useState } from "react"

const ShowDay = () => {
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        const intervalId = setInterval(() => {
            let d = new Date()
            let year = d.getFullYear().toString()
            let month = (d.getMonth() + 1).toString()
            let day = d.getDate().toString()
            let dayofweek: number = d.getDay()

            const dayname = ["日", "月", "火", "水", "木", "金", "土", "日"]

            setDate(year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']')

            let hour = d.getHours().toString().padStart(2, '0')
            let minute = d.getMinutes().toString().padStart(2, '0')
            let second = d.getSeconds().toString().padStart(2, '0')
            setTime(hour + ':' + minute + ':' + second)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="outline-dotted rounded-md p-5 w-[720px] text-center md: m-40">
                <p className="text-md sm:text-xl lg:text-3xl font-bold ">
                    {date}<span>{time}</span>
                </p>
            </div>
        </div>
    )
}

export default ShowDay
