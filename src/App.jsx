import './App.css'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import ChartTwo from './components/ChartTwo/ChartTwo'
import DaisyNavbars from './components/DaisyNavbars/DaisyNavbars'

function App() {

  return (
    <>
      <div className="container mx-auto">
      <DaisyNavbars ></DaisyNavbars>
      <Cards></Cards>
      <Chart></Chart>
      <ChartTwo></ChartTwo>
      </div>
      
    </>
  )
}

export default App
