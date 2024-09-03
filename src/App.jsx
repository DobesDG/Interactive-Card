import './App.css'
import { useState } from 'react'
import { Input } from './components/Input'
import { Card } from './components/Card'

function App() {
const [number,setNumber] = useState([""])
const [name, setName] = useState([""])
const [month,setMonth] = useState([""])
const [year,setYear] = useState([""])
const [cvc,setCvc] = useState([""])


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
              <Card defaultValue={'000'} value={cvc} setValue={setCvc} className={'card-cvc'}/>
            </div>
          </section>
        </aside>
        <section className='form-section'>
          <section className='form-conteiner'>
            <form action="" className='form'>
              <Input title={'CARDHOLDER NAME'} value={name} setValue={setName} maxLength={'16'} minLength={'16'} type={'text'} placeholder={'e.g Jane Appleseed'} pattern={"^[A-Za-z]+(?: [A-Za-z]+)*$"}/>
              <Input title={'CARD NUMBER'} value={number} setValue={setNumber} handleNumber={true} maxLength={'19'} minLength={'19'} type={'text'} inputMode={"numeric"} placeholder={'e.g 1234 5678 9123 0000'}/>
              <section className='expcvc-conteiner'>
                <div className='expDate-conteiner'>
                  <p>EXP. DATE (MM/YY)</p>
                  <div className='expDate-inputs'>
                    <div className='month-input'>
                      <Input value={month} setValue={setMonth} maxLength={'2'} minLength={'2'} type={'text'} inputMode={"numeric"} placeholder={'MM'} pattern={'^(0[1-9]|1[0-2])$'}/>
                    </div>
                    <div className='year-input'>
                      <Input value={year} setValue={setYear} maxLength={'2'} minLength={'2'} type={'text'} inputMode={"numeric"} placeholder={'YY'} pattern={"^\\d{2}$"}/>
                    </div>
                  </div> 
                </div>
                <div className='cvc-conteiner'>
                  <p>CVC</p>
                  <div className='cvc-input'>
                    <Input value={cvc} setValue={setCvc} maxLength={'3'} minLength={'3'} type={'text'} inputMode={"numeric"} placeholder={'e.g 123'} pattern={"^\\d{3}$"}/>
                  </div>
                </div>
              </section>
                <div className='button-div'>
                  <button className='submit-button'>Confirm</button>
                </div>
            </form>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
