import React from "react"
// import * as THREE from "three"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Chase from "../components/image"
import SEO from "../components/seo"


function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="landing">
        <div>
          <h1 style={{fontSize: `56px`, color: `#5ccbec`}}>Chase Helton</h1>
          <h3 style={{fontSize: `24px`, color: `#5ccbec`, fontWeight: `400`}}>I create experiences.</h3>
          <div style={{display: `flex`, flexDirection: `row`, justifyContent: 'space-between', alignItems: `center`, padding: `8px`}}>
            <Link to="/projects" style={{flex: `1`, backgroundColor: `#5ccbec`, color: `white`, border: `none`, borderRadius: `10px`, padding: `8px`}}
            >
              My Work
            </Link>
            <Link to="/about" style={{flex: `1`, backgroundColor: `white`, color: `#5ccbec`, border: `1px solid #5ccbec`, borderRadius: `10px`, padding: `8px`}}
            >
              About Me
            </Link>
          </div>
        </div>
        <div style={{ width: `300px`, padding: `10px 20px`, borderRadius: `10`}}>
          <Chase />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage