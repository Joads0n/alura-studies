import { ITarefa } from '../../../types/tarefa';
import itemStyle from './Item.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    return (
        
        <li className={`${itemStyle.item} ${selecionado ? itemStyle.itemSelecionado : ''} ${completado ? itemStyle.itemCompletado : ''}`} // Aplica a classe se o item foi selecionado
            onClick={() => !completado && selecionaTarefa({
                tarefa, 
                tempo, 
                selecionado, 
                completado, 
                id
            })}
        >
            <h3>{ tarefa }</h3>
            <span>{ tempo }</span>
            {
            completado && <span className={itemStyle.concluido}
                area-label="tarefa completada"></span>}
        </li>
    )
}