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
    <div className='inputForm'>
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
  )
}