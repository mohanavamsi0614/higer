import './App.css'
import Map from './comp/hof'
import Data from './comp/data'
import Filter from './comp/hof-2'
import Filter1 from './comp/hof-3'
import Filter2 from './comp/hof-4'
import Reduse from './comp/reduse'
function App() {
 
  return (
    <>
    <h1 className='title'>All Items</h1>
      <Map data={Data}/>
      <h1 className='title'>By type</h1>
      <Filter data={Data}/>
      <h1 className='title'>By letter</h1>
      <Filter1 data={Data}/>
      <h1 className='title'>By age</h1>
      <Filter2 data={Data}/>
      <h1 className='title'>Total age of Designer`s</h1>
      <Reduse data={Data}/>
    </>
  )
}

export default App
