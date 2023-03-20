import React from 'react'

const data = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    desc: 'Will hydrogen-fueled cars ever catch up to EVs?'
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    desc: 'What are the possible adverse effects of on-demand AI image generation?'
  },
  {
    id: 3,
    title: 'Is VC funding drying up?',
    desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means'
  }
]

function Recommended() {
  return (
    <div className='recommended'>
      <h1>New</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="recommended-tile">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Recommended
