import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const sidebarData = {
  notifications: [
    {
      title: 'You have a bug that needs...',
      timestamp: 'Just now',
      img:'../assets/bug.svg'
    },
    {
        title: 'You have a Bug that needs fixing',
        timestamp: '12 hours ago',
        img:'../assets/bug.svg'
      },
      {
        title: 'Aani lane subscribed to you!',
        timestamp: '12 hours ago',
        img:'../assets/bug.svg'
      },
    // ... other notifications
  ],
  activities: [
    {
        title: 'You have a bug that needs...',
        timestamp: 'Just now',
        
      },
    {
      title: 'Released a new version',
      timestamp: '59 minutes ago',
    },
    {
        title: 'Submitted a bug',
        timestamp: 'Just now',
        
      },
      {
        title: 'Modified data in page X',
        timestamp: 'Just now',
        
      },
   
    // ... other activities
  ],
  contacts: [
    {
      name: 'Natali Cralg',
      avatar: 'https://example.com/natali-cralg.jpg',
    },
    {
        name: 'Drew Cano',
    },
    {
        name: 'Orlando Diggs',
    }
    // ... other contacts
  ],
};

const UpdateBar = () => {
  return (
    <div className='updatebar'>
      <h5>Notifications</h5>
      <List>
        {sidebarData.notifications.map((notification) => (
          <ListItem key={notification.title}>
             <img src={notification.img} />
            <ListItemText primary={notification.title} secondary={notification.timestamp} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h5>Activities</h5>
      <List>
        {sidebarData.activities.map((activity) => (
          <ListItem key={activity.title}>
            <ListItemAvatar>
              {activity.icon}
            </ListItemAvatar>
            <ListItemText primary={activity.title} secondary={activity.timestamp} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h5>Contacts</h5>
      <List>
        {sidebarData.contacts.map((contact) => (
          <ListItem key={contact.name}>
            <ListItemAvatar>
              <Avatar src={contact.avatar} />
            </ListItemAvatar>
            <ListItemText primary={contact.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UpdateBar;