import {level} from '../../helpers/imc'
import styles from './GridItem.module.css'
import  upImage  from "../../assets/up.png";
import  downImage  from "../../assets/down.png";

type props = {
    item: level
}


export const GridItem = ({item} : props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            
            {item.yourImc &&  
            <div className={styles.yourImc}>
                seu IMC é de {item.yourImc.toFixed(2)} kg/m²
            </div>
            }

            <div className={styles.prhase}>

                {item.title === 'Abaixo' &&
                <p style={{color: 'red'}}>procure um nutricionista urgente!</p>
                }

                {item.title === 'Normal' &&
                <p style={{color: 'green'}}>parabéns, mantenha esse peso.</p>
                }
                {item.title === 'Sobrepeso' &&
                <p style={{color: 'yellow'}}>ops, está um pouco acima do peso, busque ajuda</p>
                }
                {item.title === 'Obesidade' &&
                <p style={{color: 'red'}}>procure um nutricionista urgente!</p>
                }

            </div>

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}

