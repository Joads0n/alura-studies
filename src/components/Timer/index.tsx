import Button from "../Button";
import Clock from "./Clock";
import styleTimer from "./Timer.module.scss";

function Timer(){
    return (
        <div className={styleTimer.cronometro}>
            <p className={styleTimer.titulo}>Escolha um card e inicie o cronômetro</p>
            
            <div className={styleTimer.relogioWrapper}>
                <Clock />
            </div>
            
            <Button>
                Começar
            </Button>
        </div>
    )
}

export default Timer;