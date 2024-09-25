import Tuote from './Tuote'
import style from './Tuoteita.module.css'

function Tuoteita({ tuoteita, onAdddKassaClick}) {
  return (
    <div className={style.tut}>
      {
        tuoteita.map((item, index) => (
          <Tuote
            key={index}
            tuote={item.tuote}
            hinta={item.hinta}
            onAdddKassaClick= {onAdddKassaClick}
          >
          </Tuote>
        ))
      }
    </div>



  )
}

export default Tuoteita 