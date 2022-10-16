
import { useState } from 'react';
import './App.css';

function App() {
  const [wight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [result, setResult] = useState(false)
  const [description, setDescription] = useState()

  const handleclick = (e) => {
    e.preventDefault()
     const Myheight = parseFloat( height * height)
    const resultado =(( wight / Myheight))
    if(!resultado) {
      return false
    }
    setResult(resultado.toFixed(2))
    if ( resultado<17) {
      setDescription('muito abaixo do peso')
    }
    if(resultado >=17 && resultado <18.4){
    setDescription('abaixo do peso')

  }
  if(resultado >=18.5 && resultado <=24.9){
    setDescription('peso normal')

  }
  if(resultado >=25 && resultado <29.9){
    setDescription('acima do peso')

  }
  if(resultado >=30 && resultado <34.9){
    setDescription('obesidade 1')

  }
  if(resultado >=35 && resultado <39.9){
    setDescription('obesidade 2')

  }
  if(resultado >40){
    setDescription('obesidade 3 (morbida)')

  }




}

  return (
    <div className="App">
     
      <form className='calculadora'>
      <h1 clsssName='title'>Calculadora mmc</h1>
      

        <input type="number" placeholder='digite um peso' onChange={(e)=>setWeight(e.target.value)}/>
        <input type="number" placeholder='digite sua altura'onChange={(e)=> setHeight(e.target.value)} />
        <button onClick={handleclick}>confirmar</button>
            <h2 className='result'>{result && result}</h2>
             <p className='desc'>{description}</p>
      </form>
  
    
    </div>
  );
}

export default App;
