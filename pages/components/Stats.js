import { motion } from 'framer-motion'

const Stats = (
  {
    remainingBudget,
    setRemainingBudget,
    totalRemaining,
    setTotalRemaining,
    dailyBudget,
    daysRemaining
  }
) => {
  return (
    <motion.div
      layout
      id="inputBudget"
      className='data'
      key={ Math.random() }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className='dailyBudget dataCard'>
        <h4>Daily Budget</h4>
        <p><span className='dataCardNumberPositive'>${ dailyBudget }</span></p>
      </div>

      <div className='dailyBudgetRemaining dataCard'>
        <h4>Daily Budget Remaining</h4>
        <p>
          { // Ternary for green or red text based on positive or negative number
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
    </motion.div>
  )
}

export default Stats