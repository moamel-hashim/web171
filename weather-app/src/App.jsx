
import React from 'react'
import './css/App.css'
import Weather from './components/weather';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isLoading: true,
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://mm214.com/demo.php');
      const json = await response.json();
      this.setState({ data: json, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { data, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Weather data={data} />
        )}
      </div>
    );
  }
}
