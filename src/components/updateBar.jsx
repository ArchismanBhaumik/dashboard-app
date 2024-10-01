import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import bug from "../assets/bug.svg"
import broadcast from "../assets/broadcast.svg"
import boy1 from "../assets/boy1.svg"
import boy2 from "../assets/boy2.svg"
import boy3 from "../assets/boy3.svg"
import boy4 from "../assets/boy4.svg"
import boy5 from "../assets/boy5.svg"
import newUser from "../assets/newUser.svg"
import c1 from "../assets/c1.svg"
import c2 from "../assets/c2.svg"
import c3 from "../assets/c3.svg"
import c4 from "../assets/c4.svg"
import c5 from "../assets/c5.svg"
import c6 from "../assets/c6.svg"

const sidebarData = {
  notifications: [
    {
      title: 'You have a bug that needs fixing',
      timestamp: 'Just now',
      img:bug
    },
    {
        title: 'New User Registered',
        timestamp: '12 hours ago',
        img:newUser
      },
    {
        title: 'You have a Bug that needs fixing',
        timestamp: '12 hours ago',
        img:bug
      },
      {
        title: 'Aani lane subscribed to you!',
        timestamp: 'Today, 11:59 PM',
        img:broadcast
      },
  
  ],
  activities: [
    {
        title: 'You have a bug that needs...',
        timestamp: 'Just now',
        img:boy1
      },
    {
      title: 'Released a new version',
      timestamp: '59 minutes ago',
      img:boy2
    },
    {
        title: 'Submitted a bug',
        timestamp: 'Just now',
        img:boy3
      },
      {
        title: 'Modified data in page X',
        timestamp: 'Just now',
        img:boy4
      },
   
    
  ],
  contacts: [
    {
      name: 'Natali Cralg',
      img:c1
    },
    {
        name: 'Drew Cano',
        img:c2
    },
    {
        name: 'Orlando Diggs',
        img:c3
    },
    {
        name: 'Andy Lane',
        img:c4
    },
    {
        name: 'Kate Morrison',
        img:c5
    },
    {
        name:'Koray Okumos',
        img:c6
    }
 
  ],
};


const UpdateBar = () => {
  return (
    <div className='updatebar'>
      <h5>Notifications</h5>
      <List>
        {sidebarData.notifications.map((notification) => (
          <ListItem key={notification.title}>
             <img src={notification.img} className='m-2' />
            <ListItemText primary={notification.title} secondary={notification.timestamp} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h5>Activities</h5>
      <List>
        {sidebarData.activities.map((activity) => (
          <ListItem key={activity.title}>
            <img
              src={activity.img}
              className='m-2'
            />
            <ListItemText primary={activity.title} secondary={activity.timestamp} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h5 >Contacts</h5>
      <List>
        {sidebarData.contacts.map((contact) => (
          <ListItem key={contact.name}>
           <img src={contact.img} alt="" />
            <ListItemText primary={contact.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UpdateBar;