"use client"
import React from 'react'

export default function NotFound() {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-cover bg-gradient-to-r from-gray-900 to-gray-700'>
      <h1>404</h1>
      <h2>The requested page was not found.</h2>
      <h2 className='mt-5'>[]~(￣▽￣)~*</h2>
      <button type="button" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5" onClick={() => history.back()}>Go Back</button>
    </div>
  )
}
