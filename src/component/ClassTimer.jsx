import React, { Component } from 'react'

 class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{this.setState()})
    }
  render() {
    return (
      <div>ClassTimer</div>
    )
  }
}

export default ClassTimer