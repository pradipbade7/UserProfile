import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Profile from './components/Profile';
function App() {

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const getProfiles = async () => {
      const profilesFromServer = await fetchProfiles()
      setProfiles(profilesFromServer)
    }
    getProfiles()
  }, [])

  const fetchProfiles = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
  }

  return (
    <Router>
<div className='container'>
      <Header/>
      <Routes>
          <Route
            path='/'
            element={
              <>
                {profiles.length > 0 ? (
                  <ProfileList profiles={profiles} />
                ) : (
                  'No Profiles'
                )}
              </>
            }
          />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
