import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState({
    'name': 'shreya',
    'age': 12,
    'hobby': 'going to gym'
  });

  let textDisplay = () => {
    // setName({
    //   'name': 'john',
    //   'age': 21,
    //   'hobby': 'going to yoga'
    // });

    setName({ ...name, name: 'jo' })

  }
  return <div>
    <h3>{name.name}</h3>
    <h3>{name.age}</h3>
    <h3>{name.hobby}</h3>
    <button className='btn' onClick={textDisplay}>Click</button>
  </div>;
};

export default UseStateObject;
