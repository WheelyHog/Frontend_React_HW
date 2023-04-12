import React from 'react'
import s from './DayItem.module.css'
import Task from "../Task/Task";

function DayItem({day, tasks, deleteTask, deleteDay, changeImportance}) {

    const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    return (
        <div className={s.day_wrapper}>
            <div className={s.day}>
                <p>{week[day]}</p>
            </div>
            <div className={s.task_container}>
                {tasks.map((elem, index) => {
                    if(elem.day === day){
                        return <Task id={elem.id} importance={elem.importance} description={elem.description} key={index} deleteTask={deleteTask} changeImportance={changeImportance}/>
                    }
                })}
            </div>
            <button className={s.close_btn} onClick={() => deleteDay(day)}>x</button>
        </div>
    )
}

export default DayItem
