import React, { ReactNode } from "react"

type DayProps = {
    day: Date
    rowIdx: number
}

export const Day = (props: DayProps) => {
    const { day, rowIdx } = props

    const currentDate = new Date()
    const currentDayFormatted = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`

    const formattedDay = `${day.getDate()}-${day.getMonth() + 1}-${day.getFullYear()}`

    const isCurrentDay = formattedDay === currentDayFormatted

    const getCurrentDayClass = () => (isCurrentDay ? "bg-blue-600 text-white rounded-full w-7" : "")

    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {/* 1行目に曜日を表示 */}
                {rowIdx === 0 && <p className="text-sm mt-1">{getDayOfWeek(day.getDay())}</p>}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.getDate()}
                </p>
            </header>
        </div>
    )
}

const getDayOfWeek = (dayIndex: number) => {
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"]
    return daysOfWeek[dayIndex]
}