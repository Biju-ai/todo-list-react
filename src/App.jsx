import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([])

  return (
    <>
    <div>
     <input type="text" id='text' placeholder='Add a new list item' />
     <button onClick={()=>setList([...list,document.getElementById('text').value])} style={{ background: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px',margin: '10px' }}>add</button>
     <button onClick={()=>setList([])} style={{ background: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>deleteAll</button>
     <ul style={{ listStyleType: 'none', padding: 0, margin: '20px', width: '300px',border: '5px solid #3a3838ff', borderRadius: '5px',justifyContent: 'space-between', alignItems: 'center' }}>
      {list.map((item,index)=>(
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px',border: '1px solid #ccc', padding: '5px' }} key={index}>{item}
        <button onClick={()=> setList(list.filter((_,i)=>i!==index))} style={{ background: 'blue', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>remove</button>
      </li>
      ))}
     </ul>
      </div>

    </>
  )
}

export default App
