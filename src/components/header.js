import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, { useLayoutEffect, useState } from "react"
import Navs from "../components/navs"
import Burger from '@animated-burgers/burger-rotate'
import '@animated-burgers/burger-rotate/dist/styles.css'

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function Header({ siteTitle }) {
  const screenWidth = useWindowSize();
  const [hamIsOpen, setHamIsOpen] = useState(false);
  return (
    <>
    <header
      style={{
        background: `#5ccbec`,
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
      }}
    >
      <Link to="/" id="name" className="nav-name">CH</Link>
      <div>
      {
        screenWidth > 575 &&
        <div className="topnav" id="myTopnav" style={{ display: 'flex', flexDirection: 'row' }}>
          <Navs />
        </div>
      }
      {
        screenWidth <= 575 &&
        <div className="topnav" id="myTopnav" style={{ display: 'flex', flexDirection: 'row', flexWrap: `wrap` }}>
          <Burger  
            Component="button" 
            type="button" 
            isOpen={hamIsOpen}
            onClick={() => {setHamIsOpen(!hamIsOpen)}}
            style={{backgroundColor: `#5ccbec`, color: `black`, border: `none`, marginRight: `20px`}}/>
        </div>
      }
      </div>
    </header>
    {
      hamIsOpen && (
        <div className="openHam">
          <Navs />
        </div>
      )
    }
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
