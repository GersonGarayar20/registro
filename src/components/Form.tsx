import React, { useState } from 'react'

export default function Form() {
  const [values, setValues] = useState()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" required/>
      </form>
    </div>
  )
}
