import React from "react"
import { Day } from "./Day"

type MonthProps = {
    month: Date[][]
}

const Month = (props: MonthProps) => {
    const { month } = props

    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day key={idx} day={day} rowIdx={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Month
