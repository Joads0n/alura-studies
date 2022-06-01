import { ITarefa } from '../../types/tarefa';
import Item from './Item/index';
import listStyle from './List.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function List({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={listStyle.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                { tarefas.map((item) => (
                    <Item selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item} 
                    />
                    // OU
                    // <Item key={index} 
                    //     tarefa={item.tarefa}
                    //     tempo={item.tempo}
                    // />
                )) }
            </ul>
        </aside>
    )
}

export default List