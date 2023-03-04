import './index.css'

import {Component} from 'react'

import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />
        <div className="heading-container">
          <h1 className="main-head">Find The Jobs That Fits Your Life</h1>
          <p className="main-description">
            Millions of people searching for jobs, salary information, company
            reviews.Find the job that fits your abilities and potential.
          </p>
          <button type="button" className="jobs-button">
            Find Jobs
          </button>
        </div>
      </div>
    )
  }
}

export default Home
