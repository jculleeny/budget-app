export default function InputPurchase () {

  const handlePurchaseSubmit = (e) => {
    e.preventDefault()

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