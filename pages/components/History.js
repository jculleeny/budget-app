import Image from "next/image"
import Link from "next/link"
import removeSVG from "../../public/remove.svg"

export default function History({ date, amount }) {

  return (
    <tr key="">
      <td>{ date }</td>
      <td>${ amount }</td>
      <td>
        <Link href="">
          <Image src={ removeSVG } alt="remove purchase" width={ 25 } height={ 25 } />
        </Link>
      </td>
  </tr>
  )
}