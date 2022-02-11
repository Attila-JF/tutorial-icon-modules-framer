import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HandIcon from './handIcon'
import AudioPLayer from './components/audioPlayer'
import  {store} from './redux/store/store'
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
    <div className="App">
     <AudioPLayer/>
      <HandIcon/>
    </div>
    </Provider>
  )
}

export default App
