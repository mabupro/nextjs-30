'use client'

import React, { useContext } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import GlobalContext from "@/app/src/components/parts/calendar/context/GlobalContext"

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1)
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }

    const getCurrentMonth = () => {
        const currentYear = new Date().getFullYear()
        const currentMonth = new Date(currentYear, monthIndex).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
        })
        return currentMonth.replace(/\//g, "年") + "月" // "YYYY年MM月"
    }

    const handleReset = () => {
        // 現在の月を取得
        setMonthIndex(new Date().getMonth())
    }

    return (
        <header className="px-4 py-2 flex items-center">
            <h1 className="mr-10 text-xl text-gray-500 font-bold">カレンダー</h1>
            <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className="cursor-pointer text-gray-600 mx-2">
                    <MdChevronLeft />
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className="cursor-pointer text-gray-600 mx-2">
                    <MdChevronRight />
                </span>
            </button>
            <h2 className="ml-4 text-xl text-gray-500 font-bold">{getCurrentMonth()}</h2>
        </header>
    )
}

export default CalendarHeader
