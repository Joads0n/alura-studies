import styleClock from "./Clock.module.scss";


function Clock(){
    return (
        <>
            <span className={styleClock.relogioNumero}>0</span>
            <span className={styleClock.relogioNumero}>0</span>
            <span className={styleClock.relogioDivisao}>:</span>
            <span className={styleClock.relogioNumero}>0</span>
            <span className={styleClock.relogioNumero}>0</span>
        </>
    )
}

export default Clock;