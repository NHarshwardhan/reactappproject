import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Articles() {
  return (
    <div>
          <h1>List of Articles : - </h1>
          <Link to='article1'>Article1</Link> &nbsp;&nbsp;
          <Link to='article2'>Article2</Link>
          <br/>
          {/* Render Nested Route component */}
          <Outlet/>
    </div>
  )
}
