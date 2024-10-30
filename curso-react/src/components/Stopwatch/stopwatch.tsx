import Button from "../Button/button";
import Watch from "./Watch/watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useState } from "react";

interface Props{
    selected: ITask | undefined
}

export default function Stopwatch({selected}: Props){
    const [time, setTime] = useState<number>();
    if (selected?.time) {
        setTime(timeToSeconds(selected?.time));
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
            Tempo: {time}
            <div className={style.relogioWrapper}>
                <Watch/>
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}