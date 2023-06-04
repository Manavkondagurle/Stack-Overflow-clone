import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.svg'
const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width='15'/>
          <p>How to use marketing techniques to build<br/> a better resume</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width='15'/>
          <p>How the creator of Angular is dehydrating the web (Ep. 574)</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width='15'/>
          <p>AI/ML Tool examples part 3 - Title-Drafting Assistant</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width='15'/>
          <p>We are graduating the updated button styling for vote arrows</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width='15'/>
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
      </div>

      <h4>Hot Meta post</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget