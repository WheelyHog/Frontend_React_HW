import React from 'react'
import DayItem from "../DayItem/DayItem";


function Sheduler({tasks, days, deleteTask, deleteDay, changeImportance}) {

    days.sort((a,b) => +b.day - +a.day)

    return (
        <div>

            {days.map((elem, index) => <DayItem day={elem} key={index} tasks={tasks} deleteTask={deleteTask} deleteDay={deleteDay} changeImportance={changeImportance}/>)}

        </div>
    )
}

export default Sheduler
