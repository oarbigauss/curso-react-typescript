import React, { useState } from "react";
import style from './List.module.scss'
import Item from "./Item/item";
import { ITask } from "../../types/task";

interface Props {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void
}

function List ({ tasks, selectTask } : Props ) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item 
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;