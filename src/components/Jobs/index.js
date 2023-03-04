import './index.css'

import {Component} from 'react'

import Header from '../Header'

class Jobs extends Component {
  state = {jobsList: ''}

  render() {
    const {jobsList} = this.state
    console.log(jobsList)
    return (
      <div className="jobs-container">
        <Header />
        <h1>hello kousik</h1>
      </div>
    )
  }
}

export default Jobs
