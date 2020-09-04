import React from 'react'
import dijkstra from '../images/dijkstra.gif'
import reactlogo from '../images/blackreact.png'
import play from '../images/play.png'

function Dijkstra() {
    return (
        <div className="projectDiv">
          <h3>Pathfinding Visualizer</h3>
          <div className="builtWith">
            <p>React.js </p>
            <img src={reactlogo} alt="React.js" width='20'/>
          </div>
          <img src={dijkstra} alt="Dijkstra" width="300px"/>
          <div className="interact">
            <a href="https://pathfind.netlify.app" target="_blank" rel="noreferrer">
              <img src={play} alt="Play" width="40"/>
            </a>
            {/* <a href="https://github.com/chasehelton/Pathfinding-Visualizer" target="_blank" rel="noreferrer">
              <img src={github} alt="Github" width="40"/>
            </a> */}
          </div>
          <p style={{color: `black`}}>
            This project is a React app bootstrapped with "create-react-app" that visualizes <i><a style={{color: '#5ccbec'}} href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" target="_blank" rel="noreferrer">Dijkstra's famous pathfinding algorithm</a></i>. I had a lot of fun making this, and I hope you have just as much fun playing with it! **Disclaimer: Not optimized for mobile devices**
          </p>
        </div>
    );
}

export default Dijkstra