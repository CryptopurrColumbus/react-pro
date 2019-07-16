import React, { Component } from 'react'
import Lol from './components/Lol'

export class App extends Component {

 state = {
    user: "purva"
  }
  
  componentDidMount(){
    this.diani();
  }
  
  diani(){
    this.setState({obj:"lolo"})
  }
  render() {
    return (
      <div>
       <Lol lolla = {this.state.user} obj = {this.state.obj}/>
      </div>
    )
  }
}

export default App
