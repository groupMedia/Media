import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='bg-second-bg-web-dark text-white'>
      <Link className='' to={'/courses'}>دوره ها</Link>
      <h1 className='text-3xl'>بازدید</h1>
      <h1 className='text-3xl font-iransans '>بازدید</h1>
      <h1 className='text-3xl font-iransans font-extralight'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-light'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-normal'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-medium'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-semibold'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-bold'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-extrabold'>بازدید</h1>
      <h1 className='text-3xl font-iransans font-black'>بازدید</h1>
    </div>
  )
}
