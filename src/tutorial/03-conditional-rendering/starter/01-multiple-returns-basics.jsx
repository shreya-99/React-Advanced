import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  if (loading)
    return <h2>Loading...</h2>
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
