

import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

     // const [data , setData] = useState([])
    // useEffect(() => {
     
    // fetch('https://api.github.com/users/hitaishi18-coder')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
    // })
    // }, [])
    

  return (
    <>
      <div className='text-center m-4 bg-gray-800 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <div>
          <img
            src={data.avatar_url}
            alt='GitHub Profile'
            width={300}
            className='mx-auto mt-4 rounded-full shadow-lg'
          />
        </div>
      </div>
    </>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/hitaishi18-coder');
    if (!response.ok) throw new Error("Failed to fetch GitHub data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return { followers: "Error", avatar_url: "" };
  }
};
