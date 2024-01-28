'use client'
import { useState } from "react"

const Counter = () => {

    const [currentNum, setCurrentNum] = useState(0);

    const plusCounter = () => {
        setCurrentNum(currentNum + 1)
    }

    return (
        <>
            <div className="m-40 p-5 shadow-lg items-center grid grid-flow-col grid-rows-2 rounded-md bg-slate-200 ">
                <p className="text-3xl font-bold mx-auto">{currentNum}</p>
                <button
                    type="button"
                    onClick={plusCounter}
                    className="text-3xl font-bold mx-auto p-5 px-20 shadow-md rounded-md bg-emerald-500 hover:bg-emerald-400"
                >+</button>
            </div>
        </>
    )
}

export default Counter