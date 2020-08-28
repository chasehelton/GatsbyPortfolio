import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function AboutPage() {
  const [months, setMonths] = useState(6);
  useEffect(() => {
    var startDate = new Date(2020, 1, 7);
    var today = new Date();
    var m;
    m = (today.getFullYear() - startDate.getFullYear()) * 12;
    m -= startDate.getMonth();
    m += today.getMonth();
    setMonths(m + 1);
  }, []);

  return (
    <Layout>
      <SEO title="About" />
      <div 
        style={{
          display: `flex`, 
          flexWrap: `wrap`,
          alignItems: `center`, 
          flexDirection: 'column',
          justifyContent: `center`, 
          maxWidth: `1100px`, 
          margin: `0 auto`,
          padding: `20px`,
        }}>
        <br/>
        <h1 style={{color: `#5ccbec`, marginRight: `30px`}}>It's Nice to Meet You!</h1>
        <br/>
        <div style={{ maxWidth: `700px`}}>
          <h2>Professional Experience</h2>
          <p>My name's Chase Helton, and I am a junior at NC State pursuing a bachelor's degree in Computer Science. I currently work as a <i>mobile and web application developer</i> at NCSU in the Office of Information Technology. For the past {months} months in this position, I have had the opportunity to positively affect the students and faculty of NCSU.</p>

          <h4>Mobile Development - <small>Java, XML</small></h4>
          <p>For app development at NCSU, I primarily program features for Android devices in the Android Studio development environment while writing in both Java and XML. Some key features I have deployed are: </p>
          <ul>
            <li>a RESTful API infrastructure connected to the Transloc Bus System to provide real-time updates of where the campus buses are and what time they will arrive at each stop</li>
            <li>an algorithm that sorts a list of dining hall menu items based on a users desired food preference (i.e vegetarian, vegan, halal) and their allergy preferences (i.e. gluten, soy, etc.)</li>
          </ul>

          <h4>Web Development - <small>JavaScript, Vue.js, HTML, CSS, PHP, MySQL</small></h4>
          <p>In addition to mobile development, I have also been developing a new web application for the IT department to use to manage GoLinks (NCSU's URL shortener system). I have been focusing on the front-end, writing in JavaScript with the Vue.js framework, which is connected to a PHP back-end with a MySQL database. This web app will serve as a manager for the thousands of GoLinks that we handle every day.</p>

          <br/>
          <h2>Personal Experience</h2>
          <p>Ever since I was young, I have been obsessed with computers. Growing up, I played a lot of video games with my friends, and I would always be anxious to get my hands on the newest Apple product or gaming console. I started learning to code my senior year of high school through coding tutorial sites and videos.</p>
          <p>I quickly became addicted to it. Now, I listen to podcasts about new frameworks and watch YouTube video tutorials to constantly learn new technologies. I am so drawn in by programming because it is something that I can do for my entire life and never fully master, enabling me to constantly be learning new things.</p>

          <h4>Learning On My Own</h4>
          <p>Since the start of quarantine, I really wanted to start developing my own apps. I bought the book "Eloquent JavaScript" to dip my toes into web development, and I fell in love with it. I began to research JS frameworks, and I came upon React which blew my mind. Functional components and hooks were so interesting to me, and I spent the next few months diving into React and reading several books about it.</p>
          <p>I took what I learned and developed a pathfinding visualiser which visualises Dijkstra's pathfinding algorithm (demo <i><a style={{color: '#5ccbec'}} href="https://pathfind.netlify.app" target="_blank" rel="noreferrer">here</a></i> and GitHub repo under the 'Projects' tab). I enjoyed writing React code so much that I also started learning React Native for mobile development.</p>

          <h4>Leading a Team</h4>
          <p>As I grew more in my knowledge of development, I realized that I could take on developing a mobile app for my church's college ministry that I am a part of. Currently, we, as a ministry, have about 3-4 different 3rd party mobile apps we are using to communicate and gather information about upcoming events because we have never bothered to hire someone to develop an app. So, I saw an opening, and I took it. I gathered a team of about 5 engineers and 2 designers, and we are now in the process of developing a mobile application.</p>
          <p>As the head engineer of this project, I have definitely grown tremendously in my communication skills, leadership skills, and especially my development skills. We are utilizing an <i>agile development life cycle</i> in order to provide students of our ministry with a usable app as we add more and more features to it.</p>
          <p>My greatest passion and the most fulfilling thing in my life is my ability to help others. Through this project, I hope to benefit everyone in my college ministry and, if anything, just make their lives a little bit easier and simpler. In my lifetime, I hope to help as many people as I can and make a positive impact on the world with the software I write.</p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage