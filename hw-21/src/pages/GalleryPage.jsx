import styles from "./styles.module.css"
import mandalorian from "./img/gallery-1.jpg"
import babyYoda from "./img/gallery-2.jpg"
import leia from "./img/gallery-3.jpg"
import padme from "./img/gallery-4.jpg"
import dart from "./img/gallery-5.jpg"
import r2d2 from "./img/gallery-6.jpg"
import ewok from "./img/gallery-7.jpg"
import bossNaas from "./img/gallery-8.jpg"


function GalleryPage() {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.gallery__photo}>
          <img src={mandalorian} className={styles.gallery__landscape} alt="" />
          <img src={babyYoda} className={styles.gallery__portrait} alt="" />
          <img src={leia} className={styles.gallery__portrait} alt="" />
          <img src={padme} className={styles.gallery__portrait} alt="" />
          <img src={dart} className={styles.gallery__landscape} alt="" />
          <img src={r2d2} className={styles.gallery__portrait} alt="" />
          <img src={ewok} className={styles.gallery__portrait} alt="" />
          <img src={bossNaas} className={styles.gallery__portrait} alt="" />
        </div>
      </div>
    </div>
  )
}

export default GalleryPage;
