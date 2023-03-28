import React, { FC } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

type Props = { data: any[] }

const DoughnatChart: FC<Props> = ({ data }) => {
  let pieChartData = data.filter((item) => item.value !== 0)
  if (pieChartData.length === 0)
    pieChartData = data.map((item) => {
      const newItem = { ...item }
      newItem.value = 1
      return newItem
    })

  return (
    <div className='flex items-center'>
      <div className='h-24 w-24'>
        <PieChart
          data={pieChartData}
          lineWidth={15}
          rounded={true}
          paddingAngle={20}
          startAngle={-80}
        />
      </div>
      <div className='flex-grow'>
        <ul className='flex'>
          {data.map((item, index) => (
            <li className='px-3 flex text-xs' key={index}>
              <div className={'w-4 h-4 rounded-full'} style={{ backgroundColor: item.color }}></div>
              <span className='mr-2'>{item.title}</span>
              <span className='mr-2'>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DoughnatChart
