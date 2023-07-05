import React from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li className={activeIndex === index ? 'active' : ''} onClick={() => setActiveIndex(index)} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
