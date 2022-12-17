import { useEffect, useState } from 'react'
import { animated } from '@react-spring/web'

import TextEdit from './components/TextEdit'
import History from './components/History'

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

  let daysRemaining = 6 + ( getDaysInMonth(date.getFullYear(), date.getMonth()) - date.getDate() )
  let dailyBudget = Math.round((totalRemaining / daysRemaining) * 100 ) / 100
  
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

  const handleTotalSubmit = (e) => {
    e.preventDefault()
    setTotalRemaining(e.target.total.value)
    setRemainingBudget(Math.round((e.target.total.value / daysRemaining) * 100 ) / 100)
    e.target.reset()
  }

  const handlePurchaseSubmit = (e) => {
    e.preventDefault()
    let purchaseAmount = parseFloat(e.target.purchase.value)
    setRemainingBudget( Math.round((remainingBudget - e.target.purchase.value) * 100) / 100 )
    setPurchaseHistory( purchaseHistory => [...purchaseHistory, {
      date: fullCalendarDate,
      amount: purchaseAmount
    }])
    e.target.reset()
  }

  return (
    <div className='app'>

      <TextEdit name='Budget Name' />

      <h3>{ fullCalendarDate }</h3>

      {
        totalRemaining === 0 ?
        <div className='inputForm'>
        <form onSubmit={ handleTotalSubmit }>
          <label htmlFor="total">Enter an amount to budget</label>
          <div className='inputWrapper'>
            <input type="text" name="total" />
          </div>
        </form>
      </div>
      :
      <span></span>
      }


      <div className='inputForm'>
        <form onSubmit={ handlePurchaseSubmit }>
          <label htmlFor="purchase">Enter Purchase Amount</label>
          <div className='inputWrapper'>
            <input type="text" name="purchase" />
          </div>
          {/* <input type="submit" /> */}
        </form>
      </div>
      

      <div className='data'>
        <div className='dailyBudget dataCard'>
          <h4>Daily Budget</h4>
          <p><span className='dataCardNumberPositive'>${ dailyBudget }</span></p>
        </div>

        <div className='dailyBudgetRemaining dataCard'>
          <h4>Daily Budget Remaining</h4>
          <p>
            {
              remainingBudget < 0 ? 
              <span className='dataCardNumberNegative'>${ remainingBudget }</span>
              :
              <span className='dataCardNumberPositive'>${ remainingBudget }</span>
            }
          </p>
        </div>

        <div className='totalRemaining dataCard'>
          <h4>Total Remaining</h4>
          <p><span className='dataCardNumberPositive'>${ totalRemaining }</span></p>
        </div>

        <div className='daysRemaining dataCard'>
          <h4>Days Remaining</h4>
          <p><span className='dataCardNumberPositive'>{ daysRemaining }</span></p>
        </div>
      </div>


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
