import { motion } from 'framer-motion'

export default function InputPurchase (
    { remainingBudget,
      setRemainingBudget,
      purchaseHistory,
      setPurchaseHistory,
      totalRemaining,
      setTotalRemaining,
      fullCalendarDate
    }
  ) {

  const handlePurchaseSubmit = (e) => {
    e.preventDefault()
    let purchaseAmount = parseFloat(e.target.purchase.value).toFixed(2)
    setRemainingBudget( parseFloat(Math.round((remainingBudget - e.target.purchase.value) * 100) / 100).toFixed(2) )
    setPurchaseHistory( purchaseHistory => [...purchaseHistory, {
      date: fullCalendarDate,
      amount: purchaseAmount
    }])
    setTotalRemaining( parseFloat(Math.round((totalRemaining - e.target.purchase.value) * 100) / 100).toFixed(2) )
    e.target.reset()
  }

  return (
    <motion.div
      layout
      id="inputForm"
      className='inputForm'
      key={ Math.random() }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <form onSubmit={ handlePurchaseSubmit }>
        <label htmlFor="purchase">
          Enter Purchase Amount
          <div className='inputWrapper'>
            <input type="text" name="purchase" />
          </div>
        </label>
        {/* <input type="submit" /> */}
      </form>
    </motion.div>
  )
}