import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps!</h1>
        <p>Wow, Gatsby is so cool guys! I can't believe I never knew about this.</p>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
