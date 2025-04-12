import { Children, useEffect, useState } from 'react'
import './App.css'
import Test from './Test';
import TestTwo from './TestTwo';
import TestThree from './TestThree';

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

function App() {
  const [test, setTest] = useState([])

  const filterPeople = people.filter(item =>
    item.id === 2
  )

  const mapped = people.map(item =>
    item.name.includes("Percy")
  )

  function handleClick(text) {
    // setTest(text)
    setTest(prev => [...prev, text]);
  }

  // split, join, includes, reduce

  // ["pouya" ]

  function handleChange(e) {
    const eventTarget = e;
    console.log("eventTarget", eventTarget);
  }

  return (
    <>
      {filterPeople.map(item => (
        <button key={item.id}>{item.name}</button>
      ))}
      <Test names="foad" />

      {/* //1 */}
      <Test>
        <TestTwo>
          <TestThree test="test" />
        </TestTwo>
      </Test>

      {/* //2 */}
      <Test />

      {/* //4 */}
      <Test names="Foad" />

      <button type='submit' onClick={() => handleClick("This is a test")}>Click</button>
      <h2>{test ? test : "nothing"}</h2>

      <input type="text" onChange={handleChange} />
    </>

  )
}

export default App

// git init
// git add .
// git commmit -m

// This is change



// stage
// commit