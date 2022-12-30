import { motion } from 'framer-motion'

import Image from "next/image"
import Link from "next/link"

import removeSVG from "../../public/remove.svg"

export default function History({ date, amount }) {

  return (
    // <motion.tr
    //   layout
    //   key={ amount }
    //   initial={{ opacity: 0, y: -15 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    <tr>
      <td>{ date }</td>
      <td>${ amount }</td>
      <td>
        <Link href="">
          <Image src={ removeSVG } alt="remove purchase" width={ 25 } height={ 25 } />
        </Link>
      </td>
    </tr>
    // </motion.tr>
  )
}