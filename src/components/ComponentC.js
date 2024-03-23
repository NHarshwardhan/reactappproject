import React, { useContext } from 'react'
import { UsernameContext } from '../App'

export default function ComponentC() {
    const username =   useContext(UsernameContext)
  return (
    <div>ComponentC - {username}</div>
  )
}
