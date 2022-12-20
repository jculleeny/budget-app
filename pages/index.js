import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import TextEdit from './components/TextEdit'
import History from './components/History'
import InputPurchase from './components/InputPurchase'
import InputBudget from './components/InputBudget'
import Stats from './components/Stats'

export default function Home() {

  // Date Variables
  const date = new Date()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let fullCalendarDate = `${months[month]} ${day}, ${year}`

  // Data Variables
  const [purchaseHistory, setPurchaseHistory] = useState([])
  const [totalRemaining, setTotalRemaining] = useState(0)
  const [remainingBudget, setRemainingBudget] = useState(0)
  const [budgetTotalDisplay, setBudgetTotalDisplay] = useState(true)

  let daysRemaining = 6 + ( getDaysInMonth(date.getFullYear(), date.getMonth()) - date.getDate() )
  let dailyBudget = parseFloat(Math.round((totalRemaining / daysRemaining) * 100 ) / 100).toFixed(2)

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
  }

  const displayHistory = purchaseHistory.map(item => {
    return (
      <History
        key={ Math.random() } // Temp fix
        date={ item.date }
        amount={ item.amount }
      />
    )
  })

  return (
    <div className='app'>

      <TextEdit name='+ Add Budget Name' />

      <h3>{ fullCalendarDate }</h3>
      <h4>December 6, 2022 - January 6, 2023</h4>

      {/* <InputBudget
        totalRemaining={ totalRemaining }
        setTotalRemaining={ setTotalRemaining }
        remainingBudget={ remainingBudget }
        setRemainingBudget={ setRemainingBudget }
        daysRemaining={ daysRemaining }
      /> */}

      {
        totalRemaining === 0
        ?
          <InputBudget
            totalRemaining={ totalRemaining }
            setTotalRemaining={ setTotalRemaining }
            remainingBudget={ remainingBudget }
            setRemainingBudget={ setRemainingBudget }
            daysRemaining={ daysRemaining }
          />
        :
          <></>
      }

      <InputPurchase
        remainingBudget={ remainingBudget }
        setRemainingBudget={ setRemainingBudget }
        purchaseHistory={ purchaseHistory }
        setPurchaseHistory={ setPurchaseHistory }
        totalRemaining={ totalRemaining }
        setTotalRemaining={ setTotalRemaining }
        fullCalendarDate={ fullCalendarDate }
      />

      <Stats
        remainingBudget={ remainingBudget }
        setRemainingBudget={ setRemainingBudget }
        daysRemaining={ daysRemaining }
        dailyBudget={ dailyBudget }
        totalRemaining={ totalRemaining }
      />

      <div className='purchaseHistory'>
      <table>
        <tbody>
          { displayHistory }
        </tbody>
      </table>
      </div>
    </div>
  )
}

// return (
//   <>
//     { transitions( (props) => {
//       return (
//         <animated.div id="inputBudget" className='inputForm' style={ props }>
//           <form onSubmit={ handleTotalSubmit }>
//             <label htmlFor="total">Enter an amount to budget</label>
//             <div className='inputWrapper'>
//               <input type="text" name="total" />
//             </div>
//           </form>
//         </animated.div>
//       )
//     })
//   }
//   </>
// )