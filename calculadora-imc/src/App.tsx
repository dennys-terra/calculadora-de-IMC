import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import {  calculateImc, level, levels } from './helpers/imc'
import  {GridItem}  from './components/GridItem'


const App = () => {

  const [hightField, setHightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<level | null>(null)

  const handleCalculateButton = () => {
    if(hightField && weightField){
      setToShow(calculateImc(hightField, weightField))
      console.log('entrou')
      console.log(toShow)
    }else {
      alert("Digite todos os campos.")
    }
  }
  
  const handleBackButton = () => {
    setToShow(null)
    setHightField(0)
    setWeightField(0)
  }

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
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigle para indície de massa corpórea, parâmetro adotado pela
          organização Mundial de saúde para calcular o peso ideal de cada pessoa.
        </p>

        <input type="number"
        placeholder='Digite a sua altura. EX: 1.5 (em métros)'  
        value={hightField > 0 ? hightField : ""}
        onChange={e => setHightField(Number(e.target.value))}
        />

        <input type="number"
        placeholder='Digite o seu peso. EX: 75.3 (em Kg)'  
        value={weightField > 0 ? weightField : ""}
        onChange={e => setWeightField(Number(e.target.value))}
        />

        <button onClick={ handleCalculateButton}>Calcular IMC</button>
      </div>
      
      
      <div className={styles.rightSide}>
        {!toShow &&
          <div className={styles.gridItem}>
            {levels.map((item, key) => 
              <GridItem key={key} item={item}/>
            )}
          </div>
        }
        
        {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              {<img src={leftArrowImage} alt='leftArrow' width={25} />}
            </div>
            <GridItem item={toShow} />
          </div>
        }
      </div>
      </div>
    </>
      );
    }
      
  
  
  export default App
          
          
        
        