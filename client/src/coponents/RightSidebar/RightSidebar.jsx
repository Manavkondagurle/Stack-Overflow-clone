import React from 'react'
import './RightSidebar.css'
import Widget from '../../coponents/RightSidebar/Widget'
import WidgetTags from '../../coponents/RightSidebar/WidgetTags'
const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RightSidebar