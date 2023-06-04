import React from 'react'
import LeftSidebar from '../../coponents/LeftSidebar/LeftSidebar'
import RightSidebar from '../../coponents/RightSidebar/RightSidebar'
import QuestionDetail from './QuestionDetail'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <QuestionDetail/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion