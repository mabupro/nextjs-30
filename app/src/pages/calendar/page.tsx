'use client'

import { useState, useEffect, useContext } from "react"

import { getMonth } from "@/app/src/components/parts/calendar/func/util"
import Month from "@/app/src/components/parts/calendar/Month"
import CalendarHeader from "@/app/src/components/parts/calendar/CalendarHeader"
import GlobalContext from "../../components/parts/calendar/context/GlobalContext"

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <>
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Month month={currentMonth} />
                </div>
            </div>
        </>
    );
}

export default Calendar