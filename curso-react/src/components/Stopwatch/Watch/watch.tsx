import style from "./Watch.module.scss"

interface Props{
    time: number | undefined;
}

export default function Watch({ time = 0 }: Props){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const minutesString = String(minutes);
    const [minutoDezena, minuteUnidade] = String(minutes).padStart(2, '0');
    const [secondDezena, secondUnidade] = String(seconds).padStart(2, '0');

    return(
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minuteUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDezena}</span>
            <span className={style.relogioNumero}>{secondUnidade}</span>  
        </>
    )
}