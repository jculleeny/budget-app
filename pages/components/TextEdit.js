import { useState } from "react"

export default function TextEdit ({ name }) {

  const [isEditing, setIsEditing] = useState(false)
  const [budgetName, setBudgetName] = useState(name)

  const changeName = (e) => {
    e.preventDefault()
    // let newName = e.target.editable.value
    setBudgetName(e.target.editable.value)
    setIsEditing(false)
  }

  return (
    <div>
      {
        isEditing ?
          <form onSubmit={ changeName }>
            <input
              className="h2-input"
              name="editable"
              type="text"
              defaultValue={ budgetName }
              onFocus={ e => e.target.select() }
              autoFocus
            />
          </form>
        :
          <h2 onClick={ () => setIsEditing(true) }>{ budgetName }</h2>
      }
    </div>
  )
}