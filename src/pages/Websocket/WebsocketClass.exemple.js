import './websocket.css';
import React from 'react';


class Websocket extends React.Component {


  constructor(props) {
    super(props); // on appellera le constructeur de la classe parente
    this.state = {
      wsmessage: 'ws message should appear here',
    }; // on initialise le state qui représente l'état du composant. c'est un objet et il doit être imutable.
  }

  componentDidMount() {
    const ws = new WebSocket('ws://localhost:8000/ws/ws-drone')
    ws.onmessage = this.onMessage

    this.setState({
      ws: ws,
      // Create an interval to send echo messages to the server
      interval: setInterval(() => ws.send('echo'), 4000)
    })
  }

  componentWillUnmount() {
    const { ws, interval } = this.state;
    ws.close()
    clearInterval(interval)
  }

  onMessage = (ev) => {
    console.log(ev)
    console.log(JSON.parse(ev.data))
    this.setState({ wsmessage: JSON.parse(ev.data) })
    this.forceUpdate()
  }

  render() {
    console.log("render() method");
    return (
      <div className="websocket">
        <h2>
          WebSocket Example
        </h2>
        <p>{this.state.wsmessage}</p>
      </div>
    )
  }
}

export default Websocket;