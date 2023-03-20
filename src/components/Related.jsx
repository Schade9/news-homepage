import React from 'react'
import retro from '../assets/image-retro-pcs.jpg'
import topLaptops from '../assets/image-top-laptops.jpg'
import gamingGrowth from '../assets/image-gaming-growth.jpg'

const data = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    detail: "What happens when old PCs are given modern upgrades?",
    image: retro
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    detail: "Our best picks for various needs and budgets",
    image: topLaptops
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    detail: "How the pandemic has sparked fresh opportunities",
    image: gamingGrowth
  }
]

function Related() {
  return (
    <div className='related'>
      {data.map((item) => {
        return (
          <div className='thumb'>
            <div>
              <img src={item.image} alt="kjldfb" srcset="" />
            </div>
            <div className='details'>
              <h1>0{item.id}</h1>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Related
