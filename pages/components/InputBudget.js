import { motion } from 'framer-motion'

export default function InputBudget (
    {
      totalRemaining,
      setTotalRemaining,
      remainingBudget,
      setRemainingBudget,
      showInputBudget,
      setShowInputBudget,
      setShowInputPurchase,
      setShowStats,
      daysRemaining
    }
  ) {

  const handleTotalSubmit = (e) => {
    e.preventDefault()
    setTotalRemaining(e.target.total.value)
    setRemainingBudget(Math.round((e.target.total.value / daysRemaining) * 100 ) / 100)
    setShowInputBudget(false)
    setShowInputPurchase(true)
    setShowStats(true)
    e.target.reset()
  }

  return(
    // <motion.div
    //   layout
    //   id="inputBudget"
    //   className='inputForm'
    //   key={ Math.random() }
    //   initial={{ opacity: 0, y: 0, x: "-100vw" }}
    //   animate={{ opacity: 1, y: "25vh", x: 0 }}
    //   exit={{ opacity: 0, y: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    <div id="inputBudget" className="inputForm">
      <form onSubmit={ handleTotalSubmit }>
        <label htmlFor="total">
          Enter an amount to budget
          <div className='inputWrapper'>
            <input type="text" name="total" />
          </div>
        </label>
      </form>
    </div>
    // {/* </motion.div> */}
  )
}