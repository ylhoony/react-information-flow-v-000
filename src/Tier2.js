import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childColor: getRandomColor()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }  

  handleColorChange = (e) => {
    this.props.handleChildClick(e);
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
      <div className="tier2" onClick={this.handleColorChange} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.updateChildColor.bind(this)} />
        <Tier3 color={this.state.childColor} handleChildClick={this.updateChildColor.bind(this)} />
      </div>
    )
  }
}
