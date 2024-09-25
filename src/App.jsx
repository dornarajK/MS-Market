import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Tuoteita from './components/Tuoteita'
import FormTuote from './components/formTuote'
import Kassa from './components/Kassa'

function App() {
  const kuappaTuoteita = [
    {
      tuote: 'Maito',
      hinta: '2'
    },
    {
      tuote: 'Mansikka',
      hinta: '3'
    },
    {
      tuote: 'Patukka',
      hinta: '1'
    },

  ];



  const [MStuoteita, setTuoteita] = useState(kuappaTuoteita)
  const [karry, setkarry] = useState([])

  const GetnewTuote = (itemTuote, itemHinta) => {
if(itemTuote==='' ||itemHinta===''){
  alert('Anna tuote ja hinta')
}
else if(isNaN(itemHinta)){
  alert('Hinta pitää olla numero')
}
else{
  const Newtavara = [...MStuoteita, {
    tuote: itemTuote,
    hinta: itemHinta,

  }]
  setTuoteita(Newtavara)
}
   

  }

  const additemKassa = (additemnew) => {
    const valitutTuotet = MStuoteita.find(item => item.tuote === additemnew)

    if (valitutTuotet) {

      setkarry([...karry, valitutTuotet]);
    }
  }

const delteKassa = (delteitemKassa) => {
  const delTuote = karry.filter(item => item.tuote !== delteitemKassa)
  setkarry(delTuote); 
}
  

  return (
    <>
      <Title></Title>
      <FormTuote onNewtavara={GetnewTuote}></FormTuote>
      <Tuoteita tuoteita={MStuoteita} onAdddKassaClick={additemKassa} />
      <Kassa kassa={karry}  ondelteKarry={delteKassa}></Kassa>

    </>
  )
}

export default App


