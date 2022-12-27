import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Dates = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className="dates">
      <DatePicker onChange={ onChange } value={ value } />
    </div>
  )
}

export default Dates