import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function LowerNavBar({Navigate}) 
{
    return(
      <div>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Github" icon={<GitHubIcon />} href='https://github.com/PedroPVega/Idle_Spore'/>
        <Button onClick = {() => Navigate("LMScreen")}>Legal Mentions</Button>
        <Button onClick = {() => Navigate("Contact")}>Contact</Button>
        <Button onClick = {() => Navigate("Site Page")}>Site plan</Button>
      </BottomNavigation>
      </div>
    );
}

export default LowerNavBar;