import ProfileCard from "./ProfileCard"

const ProfileList = ({profiles}) => {
  return (
    <div className="profilelist">
        <div className="row">
        {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
        ))}
        </div>
    </div>
  )
}

export default ProfileList