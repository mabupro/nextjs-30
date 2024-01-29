'use client'

import { useCallback, useEffect, useState } from "react"

const Timer = () => {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const [minutes, setMinutes] = useState<string>("00")
    const [seconds, setSeconds] = useState<string>("00")
    const [timerRunning, setTimerRunning] = useState<boolean>(false)

    const handleMinChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        // 全角数字含む文字列の入力を禁止する
        let value = e.target.value.replace(/\D/, '')
        // 2桁までの入力を認める
        value = value.substring(0, 2)
        // Int型に変更
        const intValue = parseInt(value)
        setMinutes(intValue <= 99 ? intValue.toString() : "0")
    }, [])

    const handleSecChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/, '')
        value = value.substring(0, 2)
        const intValue = parseInt(value)
        setSeconds(intValue <= 59 ? intValue.toString() : "0")
    }, [])

    const handleChangeEditTrue = () => {
        setIsEdit(true)
    }

    const handleChangeEditFalse = () => {
        setIsEdit(false)
    }

    const timerStart = () => {
        handleChangeEditFalse()
        setTimerRunning(true)
    }

    const timerStop = () => {
        handleChangeEditTrue()
        setTimerRunning(false)
    }

    const timerReset = () => {
        handleChangeEditTrue()
        setTimerRunning(false)
        setMinutes("00")
        setSeconds("00")
    }

    useEffect(() => {
        // タイマー用の変数
        let timer: NodeJS.Timeout;

        // タイマーが動作中の場合
        if (timerRunning) {
            timer = setInterval(() => {
                // 残り秒数が1以上の場合
                if (parseInt(seconds, 10) > 0) {
                    // 秒数を1減算し、2桁の文字列に変換して更新
                    setSeconds((prevSeconds) => (parseInt(prevSeconds, 10) - 1).toString().padStart(2, "0"));
                }
                // 残り秒数が0で、かつ残り分数が1以上の場合
                else if (parseInt(minutes, 10) > 0) {
                    // 分数を1減算し、2桁の文字列に変換して更新
                    setMinutes((prevMinutes) => (parseInt(prevMinutes, 10) - 1).toString().padStart(2, "0"));
                    // 秒数を59にリセット
                    setSeconds("59");
                }
                // 残り時間がない場合
                else {
                    timerStop();
                }
            }, 1000);
        }

        // useEffect クリーンアップ関数: タイマーのクリア
        return () => clearInterval(timer);
    }, [timerRunning, minutes, seconds]);

    return (
        <>
            <div className="grid shadow-lg m-20 p-5 rounded-md bg-slate-200">
                <div className="flex items-center justify-center m-3 text-3xl font-bold rounded-md bg-white">
                    <input
                        type="text"
                        value={minutes}
                        onChange={handleMinChange}
                        className="text-right w-12"
                        disabled={!isEdit}
                    />
                    <p className="text-3xl font-bold mx-2 bg-white">:</p>
                    <input
                        type="text"
                        value={seconds}
                        onChange={handleSecChange}
                        className="text-left w-12"
                        disabled={!isEdit}
                    />
                </div>

                <div className="mx-auto py-5 gl justify-center items-center ">
                    <button
                        type="button"
                        onClick={timerStart}
                        className="m-1 p-3 px-10 rounded-md shadow- bg-emerald-300"
                    >start</button>
                    <button
                        type="button"
                        onClick={timerStop}
                        className="m-1 p-3 px-10 rounded-md shadow-md bg-red-300"
                    >stop</button>
                    <button
                        type="button"
                        onClick={timerReset}
                        className="m-1 p-3 px-10 rounded-md shadow-md bg-white"
                    >reset</button>
                </div>
            </div>
        </>
    )
}

export default Timer
