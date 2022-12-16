export default function History({ date, amount }) {

  return (
    <tr key="">
      <td>{ date }</td>
      <td>${ amount }</td>
      <td>Remove</td>
  </tr>
  )
}