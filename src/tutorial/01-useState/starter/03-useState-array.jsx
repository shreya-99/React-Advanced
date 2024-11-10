import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {

  let [people, setPeople] = useState(data);
  let removePeople = (id) => {
    setPeople(people.filter((i) => i.id !== id))
  }
  let removeAllPeople = () => {
    setPeople([]);
  }
  return (
    <div>
      {people.map((d) => {
        const { id, name } = d;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button className='btn' type='button' onClick={()=>removePeople(id)}>Clear One</button>
          </div>
        )
      })}
      <button className='btn' type='button' onClick={removeAllPeople}>Clear All</button>
    </div>
  );
};

export default UseStateArray;
