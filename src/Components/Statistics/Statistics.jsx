import React from 'react'
import Statistic from '../statistic/statistic'

export default function Statistics() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center  gap-8 py-8 px-8 '>
      <Statistic title={'بازدید'} icon={'tv'} number={'24k+'} Percent={12} bgcolor={'bg-main-red-admin'} txcolor={'text-main-red-admin'} ></Statistic>
      <Statistic title={'به این برنامه رتبه داده اند'} icon={'star'} number={'24k+'} Percent={58} bgcolor={'bg-main-orang-admin'} txcolor={'text-main-orang-admin'}></Statistic>
      <Statistic title={'دانلود ها'} icon={'download'} number={'24k+'} Percent={70} bgcolor={'bg-main-blue-admin'} txcolor={'text-main-blue-admin'}></Statistic>
      <Statistic title={'بازدید کنندگان'} icon={'user'} number={'24k+'} Percent={20} bgcolor={'bg-main-green-admin'} txcolor={'text-main-green-admin'}></Statistic>
    </div>
  )
}
