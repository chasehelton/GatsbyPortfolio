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
          <div className="projectWrapper">
            <div className="subProjectWrapper">
              <img src={scapp} alt="SC App" width="150" />
              {/* <div className="interact">
                <a href="https://github.com/chasehelton/SummitCollegeApp" target="_blank" rel="noreferrer">
                  <img src={github} alt="Github" width="40"/>
                </a>
              </div> */}
            </div>
            <div className="subProjectWrapper2">
              <p style={{color: `black`}}>
                My college organization has been using several different 3rd party applications for communication and announcements, so I decided to gather a small team of designers and engineers to develop a social mobile app with group messaging, event organizing, and announcements for our organization. The app will handle unique user accounts, authentication flows, admin support, and much more!
              </p>
            </div>
          </div>
        </div>
    );
}

export default SummitCollege