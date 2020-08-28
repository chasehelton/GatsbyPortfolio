import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Dijkstra from '../projects/Dijkstra'
import SummitCollege from '../projects/SummitCollege'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="outerProjectsWrapper">
      <div className="innerProjectsWrapper">
        <Dijkstra />
        <SummitCollege />
      </div>
      <h2 style={{margin: '10 auto',}}>More at my GitHub!</h2>
    </div>
  </Layout>
)

export default ProjectsPage