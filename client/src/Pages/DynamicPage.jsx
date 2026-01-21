import React from 'react'
import { Link } from 'react-router-dom'


export default function DynamicPage() {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <h1>users</h1>
      <ul>
        <li> <Link to="/user/1"> Bob</Link> </li>
        <li><Link to="/user/2">Ram</Link></li>
        <li><Link to="/user/3">shyam</Link></li>
      </ul>

    </div>
  )
}
