import React, { useState } from 'react'
import SignUp from './Components/SigUp/SignUp';
// import SignUp from './Components/SignUp/SignUp'
import BmwUi from './Components/BmwUI/BmwUi'

const App = () => {
  const [Bmw, setBmw] = useState(true);
  let Toogle = () => {
    setBmw(false);
  }
  return (
    <>
      <div>
        {
          Bmw === true ? <SignUp toogleFunc={Toogle} /> : <BmwUi />
        }
      </div>


    </>
  )
}

export default App