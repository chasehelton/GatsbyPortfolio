import React from 'react'
import github from '../images/GitHub-Mark-120px-plus.png'
import dd from '../images/DailyDropsDemo.gif'
import swift from '../images/swift.png'

function DailyDrops() {
    return (
        <div className="projectDiv">
          <h3>Daily Drops</h3>
          <div className="builtWith">
            <p>Swift</p>
            <img src={swift} alt="Swift" width='20'/>
          </div>
          <div className="projectWrapper">
            <div className="subProjectWrapper">
            <img src={dd} alt="SC App" width="150" />
              {/* <div className="interact">
                <a href="https://github.com/chasehelton/SummitCollegeApp" target="_blank" rel="noreferrer">
                  <img src={github} alt="Github" width="40"/>
                </a>
              </div> */}
            </div>
            <div className="subProjectWrapper2">
              <p style={{color: `black`}}>
                At the start of quarantine, I was motivated to start drinking more water, so I decided to develop a Swift app that tracks your daily water consumption through entering the amount of mL of water consumed with a daily streak system to motivate me to drink more water! Daily Drops was my solution!
              </p>
            </div>
          </div>
        </div>
    );
}

export default DailyDrops