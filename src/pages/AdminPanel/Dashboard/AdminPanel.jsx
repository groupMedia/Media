import React from 'react'
import Statistics from '../../../Components/statistics/statistics'
import DashboardSlider from '../../../Components/PanelAdmin/DashboardSliders/DashboardSliders'

export default function AdminPanel() {
  return (
    <div>
      <div>
        <Statistics></Statistics>
      </div>
      <div className='px-8'>
        <DashboardSlider></DashboardSlider>
      </div>
    </div>
  )
}
