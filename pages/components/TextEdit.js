import { useState } from "react"
import supabase from "../../utils/supabase"

export default function TextEdit ({ name }) {

  const [isEditing, setIsEditing] = useState(false)
  const [budgetName, setBudgetName] = useState(name)

  const changeName = async (e) => {
    e.preventDefault()

    setBudgetName(e.target.editable.value)
    setIsEditing(false)
    
    try {
      const { data, error } = await supabase
      .from('budgets')
      .update({ budget_name: e.target.editable.value })
      .eq('id', 1)

      console.log(data)
      console.log(error)
    } catch (error) {
      console.log('Error', error)
    }
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