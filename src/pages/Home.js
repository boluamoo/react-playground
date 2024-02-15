import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useQuery } from 'react-query'
import Axios from 'axios'

function Home() {
  const { username } = useContext(AppContext)
  const { data, isLoading, isError, refetch } = useQuery(['cat'], () => {
    return Axios.get('https://catfact.ninja/fact').then(
      (response) => response.data,
    )
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Sorry, there was an error </h1>
  }

  const style = {
    background: 'transparent'
  }
  return (
    <div>
      <h1>This is the home page of: {username}</h1>
      <p>{data.fact}</p>
      <button onClick={refetch} style={style}>Update Data</button>
    </div>
  )
}

export default Home
