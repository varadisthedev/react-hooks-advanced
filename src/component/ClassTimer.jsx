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
      this.interval=setInterval(()=>{this.setState(prevState=>({timer:prevState.timer +1}))},1000)
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-b from-blue-950 to-blue-900 text-blue-100">
        <h1 className="text-5xl font-extrabold  p-5 bg-blue-800/40 rounded-2xl shadow-lg border border-blue-950">
        Class Timer: <span className="text-blue-300">{this.state.timer}</span>
        </h1>

      <button
         onClick={() => clearInterval(this.interval)}
        className="mt-3 px-6 py-2 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-4xl shadow-md transition-all duration-200 active:scale-75">
      Clear Timer
      </button>
</div>

    )
  }
}

export default ClassTimer