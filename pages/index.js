import { useState } from 'react'
import supabase from '../utils/supabase'

// COMPONENTS
import TextEdit from './components/TextEdit'
import InputPurchase from './components/InputPurchase'
import InputBudget from './components/InputBudget'
import Stats from './components/Stats'
import History from './components/History'
import Dates from './components/Dates'

// API - SUPABASE
export async function getStaticProps() {

  let { data: budgets } = await supabase
  .from('budgets')
  // returning all budgets because we only have a single testing budget for now, and can only use the one at the moment.
  .select('*')

  let { data: purchases } = await supabase
  .from('purchases')
  .select('*')

  console.log(purchases)

  return {
    props: {
      budgets,
      purchases
    }
  }
}

export default function Home( { budgets, purchases } ) {
  
  // Date Variables
  const date = new Date()
  const months = [
                  'January', 'February', 'March',
                  'April', 'May', 'June',
                  'July', 'August', 'September',
                  'October', 'November', 'December'
                ]
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let fullCalendarDate = `${months[month]} ${day}, ${year}`

  // Data Variables
  // const [purchaseHistory, setPurchaseHistory] = useState([])
  const [totalRemaining, setTotalRemaining] = useState(budgets[0].budget_total)

  let daysRemaining = 6 + ( getDaysInMonth(date.getFullYear(), date.getMonth()) - date.getDate() )
  let dailyBudget = parseFloat(Math.round((totalRemaining / daysRemaining) * 100 ) / 100).toFixed(2)

  const [remainingBudget, setRemainingBudget] = useState(dailyBudget)
  const [showInputBudget, setShowInputBudget] = useState(true)
  const [showInputPurchase, setShowInputPurchase] = useState(true)
  const [showStats, setShowStats] = useState(true)

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
  }

  const displayHistory = purchases.map(item => {
    return (
      <History
        key={ item.id } // Temp fix
        date={ item.purchase_date }
        amount={ item.purchase_amount }
      />
    )
  })

  return (
    <div className='app'>
      <TextEdit name={ budgets[0].budget_name || '+ Add Budget Name' } />

      <h3>{ fullCalendarDate }</h3>
      <h4>{ budgets[0].start_date } - { budgets[0].end_date }</h4>

      {
        showInputBudget && (
          <InputBudget
            totalRemaining={ totalRemaining }
            setTotalRemaining={ setTotalRemaining }
            remainingBudget={ remainingBudget }
            setRemainingBudget={ setRemainingBudget }
            showInputBudget={ showInputBudget }
            setShowInputBudget={ setShowInputBudget }
            setShowInputPurchase={ setShowInputPurchase }
            setShowStats={ setShowStats }
            daysRemaining={ daysRemaining }
          />
        )
      }

      {
        showInputPurchase && (
          <InputPurchase
            remainingBudget={ remainingBudget }
            setRemainingBudget={ setRemainingBudget }
            // purchaseHistory={ purchaseHistory }
            // setPurchaseHistory={ setPurchaseHistory }
            totalRemaining={ totalRemaining }
            setTotalRemaining={ setTotalRemaining }
            fullCalendarDate={ fullCalendarDate }
          />
        )
      }

      {
        showStats && (
          <Stats
            remainingBudget={ remainingBudget }
            setRemainingBudget={ setRemainingBudget }
            daysRemaining={ daysRemaining }
            dailyBudget={ dailyBudget }
            totalRemaining={ totalRemaining }
          />
        )
      }

      <div className='purchaseHistory'>
      <table>
        <tbody>
          { displayHistory }
        </tbody>
      </table>
      </div>

      {/* <Dates /> */}

    </div>
  )
}