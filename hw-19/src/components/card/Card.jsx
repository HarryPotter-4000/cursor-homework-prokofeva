import React from 'react'
import styles from './Card.module.css'
// import bootstrap from '../img/b.png'

const Card = (props) => {
  const { firstName, lastName, phone, gender } = props
  return (
    <div className={ styles.contactCard }>
      <p className={styles.contactItem}>{firstName}</p>
      <p className={styles.contactItem}>{lastName}</p>
      <p className={styles.contactItem}>{phone}</p>
      <p className={styles.contactItem}>{ gender }</p>
    </div>
  )
}
export default Card;