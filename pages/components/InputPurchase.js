import supabase from '../../utils/supabase'

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

  const handlePurchaseSubmit = async (e) => {
    e.preventDefault()
    let purchaseAmount = parseFloat(e.target.purchase.value).toFixed(2)
    setRemainingBudget( parseFloat(Math.round((remainingBudget - e.target.purchase.value) * 100) / 100).toFixed(2) )
    // setPurchaseHistory( purchaseHistory => [...purchaseHistory, {
    //   date: fullCalendarDate,
    //   amount: purchaseAmount
    // }])
    setTotalRemaining( parseFloat(Math.round((totalRemaining - e.target.purchase.value) * 100) / 100).toFixed(2) )
    e.target.reset()

    try {
      const { data, error } = await supabase
      .from('purchases')
      .insert([
        {
          purchase_amount: purchaseAmount,
          purchase_date: ((new Date()).toISOString()).toLocaleString('zh-TW') },

      ])
    } catch(error) {
      console.log('Error', error)
    }
  }

  return (
    // <motion.div
    //   layout
    //   id="inputForm"
    //   className='inputForm'
    //   key={ Math.random() }
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.6, delay: 0.5 }}
    // >
    <div id="inputFrom" className='inputForm'>
      <form onSubmit={ handlePurchaseSubmit }>
        <label htmlFor="purchase">
          Enter Purchase Amount
          <div className='inputWrapper'>
            <input type="text" name="purchase" />
          </div>
        </label>
        {/* <input type="submit" /> */}
      </form>
    </div>
    // </motion.div>
  )
}