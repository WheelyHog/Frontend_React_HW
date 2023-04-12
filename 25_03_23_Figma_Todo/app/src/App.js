import {useState} from "react";
import Header from "./components/Header/Header";
import Sheduler from "./components/Sheduler/Sheduler";
import s from './App.module.css'


function App() {

    let [days, setDays] = useState([])
    let [tasks, setTasks] = useState([])

    const submit_form = event => {
        event.preventDefault()
        let {day, importance, description} = event.target

        const newTask = {
            id: Date.now(),
            day: day.value,
            importance: importance.value,
            description: description.value
        }
        tasks = [...tasks, newTask].sort((a, b) => b.importance - a.importance)
        setTasks(tasks)

        if (!days.includes(day.value)) {
            days = [...days, day.value]
        }
        days.sort((a, b) => a - b)
        setDays(days)

        event.target.day.value = ''
        event.target.importance.value = ''
        event.target.description.value = ''
    }

    const deleteTask = (id) => {
        tasks = tasks.filter(elem => elem.id !== id)
        setTasks(tasks)

        const days = []
        tasks.forEach(elem => {
            if(!days.includes(elem.day)){
                days.push(elem.day)
            }
        })
        setDays([...days])
    }

    const deleteDay = (day) => {
        console.log(days)
        days = days.filter(elem => elem !== day)
        setDays(days)
    }

    const changeImportance =(id) => {
        tasks = tasks.map(elem => {
            if(elem.id === id){
               elem.importance = elem.importance === '0' ? '1' : '0'
            }
            return elem
        })
        setTasks(tasks)
    }

    return (
        <div className={s.container}>
            <Header submit_form={submit_form}/>
            <Sheduler tasks={tasks} days={days} deleteTask={deleteTask} deleteDay={deleteDay} changeImportance={changeImportance}/>
        </div>
    );
}

export default App;
