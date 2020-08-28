import React from 'react'
import reactlogo from '../images/blackreact.png'
import fb from '../images/firebase.png'
import github from '../images/GitHub-Mark-120px-plus.png'
import scapp from '../images/scapp.png'

function SummitCollege() {
    return (
        <div className="projectDiv">
          <h3>Summit College App</h3>
          <div className="builtWith">
            <p>React Native</p>
            <img src={reactlogo} alt="React Native" width='20'/>
            <p> - Firebase </p>
            <img src={fb} alt="Firebase" width='20'/>
          </div>
          <img src={scapp} alt="SC App" width="80" />
          <div className="interact">
            <a href="https://github.com/chasehelton/SummitCollegeApp" target="_blank" rel="noreferrer">
              <img src={github} alt="Github" width="40"/>
            </a>
          </div>
          <p style={{color: `black`}}>
            I am the head developer of this mobile application. We are developing it with React Native for our UI and Firebase for our authentication and backend. It handles basic authentication flows with email/password authorization. It will eventually function as a group chat/communication platform, event organizer, and social media platform.
          </p>
        </div>
    );
}

export default SummitCollege