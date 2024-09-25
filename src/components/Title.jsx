import style from './Title.module.css'
function Title(){
  return(
    <dir className={style.header}>
        <h1>MS-Market</h1>
        <p className={style.des}>MS-Market on suomalainen verkkokauppa, joka tarjoaa laajan valikoiman edullisia tuotteita.</p>
    </dir>
  
  )
}

export default Title; 