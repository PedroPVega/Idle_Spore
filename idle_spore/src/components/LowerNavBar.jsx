import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function LowerNavBar({page, SetPage}) 
{
    return(
      <div>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
        <Button>Legal Mentions</Button>
        <Button>Contact</Button>
        <Button>Site plan</Button>
      </BottomNavigation>
      </div>
    );
}

export default LowerNavBar;