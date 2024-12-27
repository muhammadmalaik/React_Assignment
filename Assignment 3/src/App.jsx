import React from 'react'
import { Data } from './Data'
import './App.css'
import Card from './Components/Card/Card'


const App = () => {
  return (
    <div>
      <div className='mainCont'>
      {
        Data.map((e, i) => {
          // console.log(e);

          return (
                <Card key={i} id={e.id} title={e.title} price={e.price} description={e.description} category={e.category} image={e.image} rating={e.ratecount} />
            )
            
          })
        }
      </div>
    </div>
  )
}

export default App

