import { useState } from 'react'
import './styles/index.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  }

  const handleDecrement = () => {
    setCount((count) => count - 1);
  }

  return (
    <div className="root">
      <nav className={"up_tab"}>
        <h2 className={"up_text"}>Катанаева Иулитта БВТ1901</h2>
      </nav>
      <main className={"main"}>
        <div className={"button_list"}>
          <button className={"button"}>Кнопка 1</button>
          <button className={"button"}>Кнопка 2</button>
          <button className={"button"}>Кнопка 3</button>
          <button className={"button"}>Кнопка 4</button>
          <button className={"button"}>Кнопка 5</button>
        </div>
        <div className={"counter_background"}>
          <p className={"counter_text"}>Счётчик</p>
            <div className={"button_container"}>
              <p className={"counter_text"}>{count}</p>
              <button className={"counter_button"} onClick={handleDecrement}>-</button>
              <button className={"counter_button"} onClick={handleIncrement}>+</button>
            </div>
        </div>
      </main>
    </div>
  )
}

export default App
