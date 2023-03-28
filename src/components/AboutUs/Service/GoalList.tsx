import { GiArcheryTarget } from 'react-icons/gi'
import { GiBinoculars } from 'react-icons/gi'

const GoalList = () => {
  const goal = [
    {
      goalIcon: GiArcheryTarget,
      title: 'اهداف ما',
      describtion:
        'لورم ایپسون با متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است',
    },
    {
      goalIcon: GiBinoculars,
      title: 'بینش ما',
      describtion:
        'لورم ایپسون با متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است',
    },
  ]
  return (
    <div>
      <div className='grid grid-cols-2 mt-20'>
        {goal.map((item, index) => (
          <div key={index} className='ml-6'>
            <h4>{item.title}</h4>
            <p>{item.describtion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { GoalList }
