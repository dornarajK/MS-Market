import style from './Kassa.module.css'

function Kassa({ kassa, ondelteKarry }) {

  const totalHinta = kassa.reduce((sum, item) =>parseInt(sum)  +  parseInt(item.hinta), 0)

  return (
    <>
      <div className='container text-center'>
      <h3>Total Hinta: {totalHinta}€</h3>
        <div className={`${style.kassa} row row-cols-4`}>
          {kassa.map((item, index) => (
            <div className={`col ${style.tuoteita}`} key={index}>
              <p> <span>Tuote: </span>{item.tuote}</p>
              <p><span>Hinta: </span>{item.hinta}€</p>
              <div>
                <button type='button' className='btn btn-danger' onClick={() => ondelteKarry(item.tuote)}>delte</button>

              </div>
            </div>
          ))}
         

        </div>
      </div>


    </>
  )


}
export default Kassa