import './App.css'
import { useState } from 'react'
import { Input } from '../images/components/Input'
import { Card } from '../images/components/Card'

function App() {
const [number,setNumber] = useState([""])
const [name, setName] = useState([""])
const [month,setMonth] = useState([""])
const [year,setYear] = useState([""])
const [cvv,setCvv] = useState([""])

const handleCardNumberChange = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(.{4})/g, '$1 ').trim();
  setNumber(value);
};

  return (
    <>
      <main className='main'>
        <aside className='aside'>
          <section className='card-conteiner'>
            <div className='card-front'>
              <img src="/images/card-logo.svg" alt="" />
              <Card defaultValue={'0000 0000 0000 0000'} value={number} setValue={setNumber} className={'card-number'} />
              <div className='card-front-subinfo'>
                <Card defaultValue={'JANE APPLESEED'} value={name} setValue={setName} className={'cardHolder-name'}/>
                <Card defaultValue={'00/00'} value={month+year ? month+'/'+year : ""} setValue={setMonth} className={'card-date'}/>
              </div>
            </div>
            <div className='card-back'>
              <Card defaultValue={'000'} value={cvv} setValue={setCvv} className={'card-cvv'}/>
            </div>
          </section>
        </aside>
        <section>
          <section className='form-conteiner'>
            <form action="" className='form'>
              <Input title={'CARDHOLDER NAME'} value={name} setValue={setName} maxLength={'16'} minLength={'16'} type={'text'} placeholder={'e.g Jane Appleseed'}/>
              <Input title={'CARD NUMBER'} value={number} setValue={handleCardNumberChange} handle={true} maxLength={'19'} minLength={'19'} type={'text'} inputMode={"numeric"} placeholder={'e.g 1234 5678 9123 0000'}/>
              <section className='expCvv-conteiner'>
                <div className='expDate-conteiner'>
                  <h5>EXP.DATE (MM/YY)</h5>
                  <div className='expDate-inputs'>
                    <Input value={month} setValue={setMonth} maxLength={'2'} minLength={'2'} type={'text'} inputMode={"numeric"} placeholder={'MM'}/>
                    <Input value={year} setValue={setYear} maxLength={'2'} minLength={'2'} type={'text'} inputMode={"numeric"} placeholder={'YY'}/>
                  </div> 
                </div>
                <div className='cvv-conteiner'>
                  <h5>CVV</h5>
                  <div className='cvv-input'>
                    <Input value={cvv} setValue={setCvv} maxLength={'3'} type={'text'} placeholder={'e.g 123'}/>
                  </div>
                </div>
              </section>
            </form>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
