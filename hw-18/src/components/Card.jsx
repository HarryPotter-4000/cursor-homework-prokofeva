import React from 'react'
import styles from './Card.module.css'



export default function Card(props) {
  const { name, nickname, content, date, comment, retweet, likes } = props;

  const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  return (
    <div className={styles.container}>
      <img className={ styles.avatar } src={ANAKIN_IMAGE} alt="" />
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={ styles.title }>
            <p className={styles.name}>{name}</p>
            <p className={ styles.check }><i class="fas fa-check-circle"></i></p>
            <p className={styles.nickname}>{nickname}</p>
            <p className={styles.date}>· {date}</p>
            <p className={ styles.arrow }><i class="fas fa-chevron-down"></i></p>
          </div>
          <div className={styles.content}>{content}</div>
        </div>
        <img className={styles.photo} src={RAY_IMAGE} alt="" />
        <div className={styles.socials}>
          <p><i class="far fa-comment"></i> { comment }</p>
          <p><i class="fas fa-retweet"></i> { retweet }</p>
          <p><i class="fas fa-heart"></i> { likes }</p>
          <p><i class="fas fa-share-alt"></i></p>
        </div>
      </div>
    </div>
  )
}