import s from './Banner.module.css'
import avatar from './img/avatar.png'

function Banner() {

  return (
    <div>
      <div className={s.banner}>
        <div className={s.description}>
          <h1 className={s.title}>Hi, I am John,<br /> Creative Technologist</h1>
          <p className={s.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className={s.download}>Download Resume</button>
        </div>
        <div className={s.photo}>
          <img src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  )
}

export default Banner
