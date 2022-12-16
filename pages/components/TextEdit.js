import { useState } from "react"

export default function TextEdit ({ name }) {

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {

  }

  return (
    <div>
      {
        isEditing ?
        <form onSubmit={ e => e.preventDefault() }>
        <input name="editable" onChange={ handleInputChange } defaultValue={ name } />
        </form>
        :
        <h2 onClick={ () => setIsEditing(true) }>{ name }</h2>
      }

    </div>
  )
}