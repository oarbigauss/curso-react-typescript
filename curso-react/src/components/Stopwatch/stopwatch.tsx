import Button from "../Button/button";
import Watch from "./Watch/watch";
import style from "./Stopwatch.module.scss"

export default function Stopwatch(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <Watch/>
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}