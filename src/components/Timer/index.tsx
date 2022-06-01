import Button from "../Button";
import Clock from "./Clock";
import styleTimer from "./Timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined 
    finalizarTarefa: () => void
}

function Timer({ selecionado, finalizarTarefa }: Props){
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={styleTimer.cronometro}>
            <p className={styleTimer.titulo}>Escolha um card e inicie o cronômetro</p>
            
            <div className={styleTimer.relogioWrapper}>
                <Clock tempo={tempo} />
            </div>
            
            <Button onClick={() => regressiva(tempo)} >
                Começar
            </Button>
        </div>
    )
}

export default Timer;