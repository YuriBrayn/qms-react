import { useCallback, useState } from 'react'
import styles from '../styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home () {
    return ( 
        <div className={styles.container}>
            <img className={styles.logo} src='../images/altitude-enghouse.png' width='157' height='70' />
            <div className={styles.title}>
                <h4>Quality Management Suite (Net Promoter Score)</h4>   
            </div>
            <WidgetSurvey />
        </div> 
    )
}

function WidgetSurvey(props){
    return (
        <div className={styles.widget}> 
            <div className={styles.survey}> 
                <a>De 0 a 10, o quanto você recomendaria nossa empresa para um amigo ou familiar?</a>
            </div>
            <Survey surveyName={0} surveyClass={styles.detractor} />
            <Survey surveyName={1} surveyClass={styles.detractor} />
            <Survey surveyName={2} surveyClass={styles.detractor} />
            <Survey surveyName={3} surveyClass={styles.detractor} />
            <Survey surveyName={4} surveyClass={styles.detractor} />
            <Survey surveyName={5} surveyClass={styles.detractor} />
            <Survey surveyName={6} surveyClass={styles.detractor} />
            <Survey surveyName={7} surveyClass={styles.passive} />
            <Survey surveyName={8} surveyClass={styles.passive} />
            <Survey surveyName={9} surveyClass={styles.promoter} />
            <Survey surveyName={10} surveyClass={styles.promoter} />
        </div>   
    )
}

function Survey(props){  
    return (
        <div className={styles.button}>
            <button onClick={() => this.selectedValue(props.surveyName)} className={props.surveyClass}>{props.surveyName}</button>
        </div>
    )
}

function WidgetMessage(props){
    return (
        <div>
            <a>Nota Escolhida: {props.surveyValue}</a> 
        </div>
    )
}