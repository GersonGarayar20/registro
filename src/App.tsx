import { useState } from 'react'

//new Date().toLocaleDateString()

const json = [
  {
    id:"1",
    precio:20,
    fecha:"23/10/22"
  },
  {
    id:"2",
    precio:15,
    fecha:"23/10/22"
  },
  {
    id:"3",
    precio:20,
    fecha:"23/10/22"
  }
]



function App() {
  const [data, setData] = useState(json)
  const [total, setTotal] = useState(0)

  const handleClick = ()=>{
    let precioTotal = data.reduce((prev, curr)=> prev + curr.precio, 0)
    console.log(precioTotal);
    setTotal(precioTotal)
  
  }
    

  return (
    <div>
      <h2>hola mundo</h2>
      {
        data.map(el=>(
          <li key={el.id}>{el.precio} - {el.fecha}</li>
        ))
      }
      <p>total:</p>
      <button onClick={handleClick}>mostrar</button>
      <p>{total} - {total/2}</p>
    </div>
  )
}

export default App
