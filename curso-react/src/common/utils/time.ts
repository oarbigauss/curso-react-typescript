export function timeToSeconds(time: string){
    const [horas, minutos, segundos] = time.split(":");

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}