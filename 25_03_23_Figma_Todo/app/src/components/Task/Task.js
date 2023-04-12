import React from 'react'
import s from './Task.module.css'

function Task({id, importance, description, deleteTask, changeImportance}) {

    const styles = {backgroundColor: importance === '1' ? '#e74c3c' : '#1abc9c'}

    return (
        <div className={s.task_item} style={styles} onDoubleClick={() => changeImportance(id)}>
            {description}
            <button className={s.close_btn} onClick={() => deleteTask(id)}>x</button>
        </div>
    )
}

export default Task
