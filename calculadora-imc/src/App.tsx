import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import {  calculateImc } from './helpers/imc'

const App = () => {

  const [hightField, setHightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () => {
    if(hightField && weightField){
      calculateImc(hightField, weightField)
      console.log('entrou')
    }else {
      alert("Digite todos os campos.")
    }
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
        b
      </div>
    </div>
  </>
    )
  }
    


export default App