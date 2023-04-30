import React from 'react'
import s from './Modal.module.css'
import avatar from '../Banner/img/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modal(props) {

  const { active, setActive } = props;

  return (
    <div className={`${s.modal} ${active && s.active}`} onClick={() => setActive(false)}>

      <form className={`${s.modal_content} ${active && s.active}`} onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={s.close} />
        <div className={s.top}>
          <h2>Contact with Me</h2>
          <img src={avatar} alt='avatar' className={s.avatar} />
        </div>
        <input type='text' name='name' placeholder='Enter your name' />
        <input type='email' name='email' placeholder='Enter your email' />
        <textarea type='text' name='message' placeholder='Write your message here...' />
        <button type='submit'>Send Message</button>
      </form>
    </div >
  )
}
