import React from 'react'
import Statistics from '../../../Components/statistics/statistics'
import DashboardSlider from '../../../Components/PanelAdmin/DashboardSlider/DashboardSlider'

export default function AdminPanel() {
  return (
    <div>
      <div>
        <Statistics></Statistics>
      </div>
      <div>
        <DashboardSlider></DashboardSlider>
      </div>
    </div>
  )
}
