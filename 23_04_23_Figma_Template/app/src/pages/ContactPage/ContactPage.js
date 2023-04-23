import React from 'react'
import s from './ContactsPage.module.css'


export default function ContactPage() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Contacts</h1>
      <div className={s.contacts}>
        <div className={s.info}>
          <h2>Our Contacts:</h2>
          <p className={s.address}>Washington, DC, USA</p>
          <p className={s.address}>+17035456700</p>
          <img src='img/fbi.png' alt='fbi-logo' />
        </div>
        <div className={s.hours}>
          <h4>Working Hours:</h4>
          <ul className={s.hour_list}>
            <li>Mo :  09:00–16:00</li>
            <li>Tu :  09:00–16:00</li>
            <li>Wed: 09:00–16:00</li>
            <li>Th :  09:00–16:00</li>
            <li>Fr :  09:00–16:00</li>
            <li>Sa :  Closed</li>
          </ul>
        </div>
        <div className={s.image}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Pentagon_US_Department_of_Defense_building.jpg/380px-The_Pentagon_US_Department_of_Defense_building.jpg' alt='fbi-building' />
        </div>
      </div>
      <form>
        <div className={s.input_box}>
          <input type='text' name='name' placeholder='Name' />
          <input type='text' name='email' placeholder='Email' />
        </div>
        <textarea name='message' placeholder='Enter Your message' />
        <button type='submit' className={s.submit}>Send</button>
      </form>
    </div>
  )
}
