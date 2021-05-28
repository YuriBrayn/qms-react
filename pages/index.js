import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles.module.css'
import ViewSource from '../components/view-source'
import Image from 'next/image'

export default function Home () {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="https://www.altitude.com/wp-content/uploads/Logo-final-05.png" alt="altitude-enghouse" width={157} height={70} />
            </div>
            <div className={styles.title}>
                <h4>Quality Management Suite (Net Promoter Score)</h4>   
            </div>
            <div className={styles.widget}> 
                <div>
                    <a>De 0 a 10, o quanto você recomendaria nossa empresa para um amigo ou familiar?</a>
                </div>
                <button className={styles.detractor}>0</button>
                <button className={styles.detractor}>1</button>
                <button className={styles.detractor}>2</button>
                <button className={styles.detractor}>3</button>
                <button className={styles.detractor}>4</button>
                <button className={styles.detractor}>5</button>
                <button className={styles.passive}>6</button>
                <button className={styles.passive}>7</button>
                <button className={styles.passive}>8</button>
                <button className={styles.promoter}>9</button>
                <button className={styles.promoter}>10</button>
            </div>
        </div> 
    )
}
