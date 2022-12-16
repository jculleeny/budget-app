export default function InputBudget () {

  const handleTotalSubmit = (e) => {
    e.preventDefault()
    setTotalRemaining(e.target.total.value)
    e.target.reset()
  }

  return (
    <div className='inputForm'>
    <form onSubmit={ handleTotalSubmit }>
      <label htmlFor="total">Enter an amount to budget</label>
      <div className='inputWrapper'>
        <input type="text" name="total" />
      </div>
    </form>
  </div>
  )
}