 import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfilePhoto from './ProfilePhoto';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import { useStore } from '../../app/stores/store';
import ProfileActivities from './ProfileActivities';

interface Props{
    profile:Profile
}

 export default function ProfileContent({profile}:Props){
  
    const {profileStore} = useStore();
    
    const panes = [
         {menuItem: 'About', render: () => <ProfileAbout />},         
         {menuItem:'Photos',render:()=><ProfilePhoto profile={profile}/>},
         {menuItem:'Events',render:()=><Tab.Pane><ProfileActivities/></Tab.Pane>},
         {menuItem:'Followers',render:()=><Tab.Pane><ProfileFollowings/></Tab.Pane>},
         {menuItem:'Following',render:()=><Tab.Pane><ProfileFollowings/></Tab.Pane>},
     ]

     return(
         <Tab
         menu={{fluid:true, vertical: true}}
         menuPosition='right'
         panes={panes}
         onTabChange={(e,data)=>profileStore.setActiveTab(data.activeIndex)}
         />
     )
 }