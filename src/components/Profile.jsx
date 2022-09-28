import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'
import Button from './Button';

const Profile = () => {
const { id } = useParams(); 
const [userprofile, setProfile] = useState([]);
const [loading, setLoading] = useState(true); 

useEffect(() => {
    const getProfile = async () => {
      const profilesFromServer = await fetchProfile();
      setProfile(profilesFromServer);
      setLoading(false);   //set Loading to false when you have the data
    }
    getProfile();
  });

const fetchProfile = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
    return data;
  }


  if (loading) { 
    return ( 
        <div className="card position-relative overflow-hidden h-30vh">
            <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    </div>
    
    
    )
  }
return (
    <div className='profile'>
        <div className="row gutters-sm">
            <div className='col-md-12 m-3'>
            <div className='p-2'>
                    <Link to="/"><Button name="GO HOME" /></Link>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card shadow mx-4 my-1">
                    <div className="card-body card-body-custom">
                        <div className="d-flex flex-column align-items-center text-center">
                            <div className="circle-text" width="120">
                            {userprofile.name?.charAt(0)}
                            </div>
                            <div className="mt-3">
                            <h5>{userprofile.name}</h5>
                            <p className="text-secondary mb-1"><i>@{userprofile.username}</i></p>
                            <p className="text-email">http://{userprofile.website}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col-md-8 mb-4">
              <div className="card shadow mx-4 my-1 overflow-hidden">
                <div className="card-body pt-5">
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>{userprofile.name}</h6>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Username</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>{userprofile.username}</h6>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>{userprofile.email}</h6>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>{userprofile.phone}</h6>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Website</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>http://{userprofile.website}</h6>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Company</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>{userprofile.company?.name}</h6>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                    <h6>Street: {userprofile.address?.street}</h6>
                    <h6>Suite: {userprofile.address?.suite}</h6>
                    <h6>City: {userprofile.address?.city}</h6>
                    <h6>Zip: {userprofile.address?.zipcode}</h6>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
export default Profile