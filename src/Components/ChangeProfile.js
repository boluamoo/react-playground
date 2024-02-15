import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

function ChangeProfile() {
  const { setUsername } = useContext(AppContext)
  const [newUsername, setNewUsername] = useState('')
  return (
    <div>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername)
        }}
      >
        Change Username
      </button>
    </div>
  )
}

export default ChangeProfile
