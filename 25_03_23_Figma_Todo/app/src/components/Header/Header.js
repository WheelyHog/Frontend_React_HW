import React from 'react'
import s from './Header.module.css'

function Header({submit_form}) {


    return (
        <div className={s.header_wrapper}>
            <form onSubmit={submit_form}>
                <div className={s.input_section}>
                    <div className={s.select_section}>
                        <div className={s.select_day}>
                            <select name='day' required>
                                <option value=''>Выберите день</option>
                                <option value='0'>ПН</option>
                                <option value='1'>ВТ</option>
                                <option value='2'>СР</option>
                                <option value='3'>ЧТ</option>
                                <option value='4'>ПТ</option>
                                <option value='5'>СБ</option>
                                <option value='6'>ВС</option>
                            </select>
                        </div>
                        <div className={s.select_importance}>
                            <select name='importance' required>
                                <option value=''>Выберите важность</option>
                                <option value='1'>Важно</option>
                                <option value='0'>Не очень</option>
                            </select>
                        </div>

                    </div>
                    <input type='text' name='description' placeholder='Описание' required/>
                </div>
                <button type='submit'>Добавить</button>
            </form>
        </div>
    )
}

export default Header
