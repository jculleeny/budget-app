export default function InputPurchase (
    { remainingBudget,
      setRemainingBudget,
      purchaseHistory,
      setPurchaseHistory,
      fullCalendarDate
    }
  ) {

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
    <div className='inputForm'>
      <form onSubmit={ handlePurchaseSubmit }>
        <label htmlFor="purchase">Enter Purchase Amount</label>
        <div className='inputWrapper'>
          <input type="text" name="purchase" />
        </div>
        {/* <input type="submit" /> */}
      </form>
    </div>
  )
}