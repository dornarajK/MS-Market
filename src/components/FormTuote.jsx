import { useState } from 'react'
import style from './FormTuote.module.css'

function FormTuote({ onNewtavara }) {

  const [tuoteNimi, setTuoteNimi] = useState('')
  const [hinta, setHinta] = useState('')

  const handleTuoteChange = (event) => {
    setTuoteNimi(event.target.value);
  }
  const handleHintaChange = (event) => {
    setHinta(event.target.value);
  }
  const handleAddButtonClicked = () => {
    onNewtavara(tuoteNimi, hinta);
    setTuoteNimi('');
    setHinta('');
  }

  return (
    <>
      <div className={style.inputForm}>
        <input type="text" value={tuoteNimi} onChange={handleTuoteChange} placeholder="Tuote" />
        <input type="text" value={hinta} onChange={handleHintaChange} placeholder="Hinta" />
        <button type="button" onClick={handleAddButtonClicked} className="btn btn-success">Lisää kauppa</button>
      </div>
    </>
  )
}

export default FormTuote