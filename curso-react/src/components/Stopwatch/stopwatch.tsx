import Button from "../Button/button";
import Watch from "./Watch/watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props{
    selected: ITask | undefined
}

export default function Stopwatch({selected}: Props){

    useEffect(()=>{
        if (selected?.time) {
            setTime(timeToSeconds(String(selected?.time)))
        }
    },[selected]);

    function regressive(count: number = 0){
        setTimeout(()=>{
            if (count > 0) {
                setTime(count - 1);
                return regressive(count - 1);
            }
        }, 1000)
    }

    const [time, setTime] = useState<number>();
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar
            </Button>
        </div>
    )
}