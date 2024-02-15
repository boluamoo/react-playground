import React, { useContext } from 'react'
import { AppContext } from '../App'
import ChangeProfile from '../Components/ChangeProfile'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const { username } = useContext(AppContext)
  let navigate = useNavigate()
  // let {username} = useParams()
  return (
    <div>
      This is the profile page of: {username}
      <ChangeProfile setUsername />
      {
        /* <h1>This is the profile page for {username}</h1> */
        <button
          onClick={() => {
            navigate('/about')
          }}
        >
          Change to about page
        </button>
      }
    </div>
  )
}

export default Profile
