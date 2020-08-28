import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Dijkstra from '../projects/Dijkstra'
import SummitCollege from '../projects/SummitCollege'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h2 style={{textAlign: 'center',}}>See more projects on my GitHub</h2>
    <div className="outerProjectsWrapper">
      <div className="innerProjectsWrapper">
        <Dijkstra />
        <SummitCollege />
      </div>
    </div>
  </Layout>
)

export default ProjectsPage