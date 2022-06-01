import styleClock from "./Clock.module.scss";

interface Props {
    tempo: number | undefined
}

function Clock({ tempo = 0 } : Props){
    const minutos = Math.floor(tempo / 60);      // Arredonda o resulto para baixo
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <>
            <span className={styleClock.relogioNumero}>{minutoDezena}</span>
            <span className={styleClock.relogioNumero}>{minutoUnidade}</span>
            <span className={styleClock.relogioDivisao}>:</span>
            <span className={styleClock.relogioNumero}>{segundoDezena}</span>
            <span className={styleClock.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}

export default Clock;