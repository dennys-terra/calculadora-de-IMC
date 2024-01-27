import styles from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () => {
  return (
  <>
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150} alt="" />
        </div>
      </header>
    </div>
    <div className={styles.container}>
      <div className= {styles.leftSide}>
        a
      </div>
      <div className={styles.rightSide}>
        b
      </div>
    </div>
  </>
    )
  }
    


export default App