import React from 'react'
import ReactDOM from 'react-dom'

import Textarea from './Textarea'

class App extends React.Component {
  state = {
    text: 'abcdef'
  }

  updateText = text => {
    this.setState({ text })
  }

  render () {
    const { text } = this.state
    return (
      <Textarea content={ text } updateText={this.updateText}/>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
