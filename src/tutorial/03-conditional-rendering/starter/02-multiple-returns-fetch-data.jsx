import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUsers(user);
        setLoading(false)
        console.log(user);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }
    fetchUsers();


  }, [])
  if (isLoading) return <h2>Loading ...</h2>
  else if (isError) return <h2>Error in fetching data</h2>
  else {
    return <div>
      <img src={users.avatar_url} alt={users.login} style={{ width: '150px', borderRadius: '25px' }}></img>
      <h2>{users.login}</h2>
      <h4>works at {users.company}</h4>
    </div>
  }
};
export default MultipleReturnsFetchData;
