import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: getRandomColor(),
      childColor: getRandomColor()
    }
  }

  updateColor = () => {
    const newColor = getRandomColor();
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  updateChildColor = (e) => {
    e.stopPropagation();
    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.updateColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleChildClick={this.updateChildColor.bind(this)} />
        <Tier2 color={this.state.childColor} handleChildClick={this.updateChildColor.bind(this)} />
      </div>
    )
  }
}
