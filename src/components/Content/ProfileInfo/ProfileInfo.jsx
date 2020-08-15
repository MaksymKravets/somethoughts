import React from "react";
import s from "./ProfileInfo.module.css";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatusHooks";


const ProfileInfo = ({profile, status,updateStatus}) => {
  if (!profile) {
    return <PreLoader />;
  }

  return (
    <div>
     
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="profile" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div><p>{profile.fullName}</p></div>
        <div><p>{profile.aboutMe}</p></div>
        <div><p>contacts</p></div>
        <div><p>Looking For a Job:{profile.lookingForAJob}</p></div>
        <div><p>Looking For a Job Description: {profile.lookingForAJobDescription} </p></div>

      </div>
    </div>
  );
};

export default ProfileInfo;
