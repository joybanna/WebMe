import React from 'react'
import '../src/css/profile.css'
import Enducation from './components/profile_enducate_part'
import Experience from './components/profile_experiece_part'
import Skill from './components/profile_skill_part'
import Personal from './components/profile_personal_part'
import Objective from './components/profile_objective_part'
import HeadProfile from './components/profile_headprofile_part'
import Doc from './components/profile_document_part'


function Profile() {
  return (

    <div class="Content_Profile">
      <HeadProfile />
      <Objective />
      <Personal />
      <Enducation />
      <Experience />
      <Skill />
      <Doc />
    </div>


  )
}

export default Profile