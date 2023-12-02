// app/user/not-found.jsx
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className='h-screen'>
        <h2>Error page</h2>
        <p>There is no User with that ID</p>
        <p>Please go back to <Link href="/user">User list page</Link></p>
    </main>
  )
}

export default NotFound