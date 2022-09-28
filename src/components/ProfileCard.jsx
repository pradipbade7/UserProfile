import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const ProfileCard = ({profile}) => {
  return (
    <div className="col-md-3 mb-4">
    <div className="card shadow mx-4 my-1">
        <div className="card-body card-body-custom">
          <div className="d-flex flex-column align-items-center text-center">
            <div className="circle-text" width="120">
            {profile.name?.charAt(0)}
            </div>
            <div className="mt-3">
              <h5>{profile.name}</h5>
              <p className="text-secondary mb-1"><i>@{profile.username}</i></p>
              <p className="text-email">http://{profile.website}</p>
              <Link to={`/profile/${profile.id}`}><Button name="MORE DETAILS" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard