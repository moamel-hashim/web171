import React from 'react'
import usStates from '../statesarraymodel'
import './App.css'

function App() {
    const state = usStates.map(({name, abbreviation}) => {

      return <option value={abbreviation}>{name}</option>
    });
    return (
      <select name="United states" id="state">
        {state}
      </select>
    )
}

export default App
