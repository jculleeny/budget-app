export default function InputBudget (
    {
      totalRemaining,
      setTotalRemaining,
      remainingBudget,
      setRemainingBudget,
      daysRemaining
    }
  ) {

  const handleTotalSubmit = (e) => {
    e.preventDefault()
    setTotalRemaining(e.target.total.value)
    setRemainingBudget(Math.round((e.target.total.value / daysRemaining) * 100 ) / 100)
    e.target.reset()
  }

  return (
    <>
      {
        totalRemaining === 0
        ?
        <div className='inputForm'>
          <form onSubmit={ handleTotalSubmit }>
            <label htmlFor="total">Enter an amount to budget</label>
            <div className='inputWrapper'>
              <input type="text" name="total" />
            </div>
          </form>
        </div>
      :
        <></>
      }
    </>
  )
}