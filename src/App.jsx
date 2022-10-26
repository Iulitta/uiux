import Navbar from './components/Navbar.jsx'
import ButtonList from './components/ButtonList.jsx'
import Counter from './components/Counter.jsx'
import './components/styles/index.css'

function App() {
  return (
    <div className="root">
      <Navbar/>
      <main className={"main"}>
        <ButtonList/>
        <Counter/>
      </main>
    </div>
  )
}

export default App
