import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import s from './index.module.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className={s.app_wrapper}>
    <App />
    <a href="https://github.com/WheelyHog/todo">Welcome to My Repository!</a>
</div>

);

