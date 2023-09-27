
import React from 'react'
import './css/App.css'
import Background from './components/background';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://mm214.com/demo.php');
      const json = await response.json();
      this.setState({ data: json })
    } catch (error) {
      console.log(error);
    }

  }
  render() {
    const {data} = this.state;
    return (
      <Background data={data} />
    )
  }
}
