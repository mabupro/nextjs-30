'use client'

import React, { useState } from "react"
import GlobalContext from "./GlobalContext"

// TODO:anyを修正する
const GlobalContextProvider = (props: any) => {
    const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
    return (
        <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider
