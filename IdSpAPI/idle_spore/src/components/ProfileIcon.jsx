import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

function ProfileIcon({handleopenusermenu, handlecloseusermenu, anchoreluser, Navigate, LoggedIn, SetLoggedIn})
{
    const handleOption = (opt) => 
    {
        Navigate(opt);
    }
    let options = [];
    if(LoggedIn)
        options = ['Logout', 'Profile'];
    else
        options = ['Login', 'Settings']
    return(
    <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleopenusermenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchoreluser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchoreluser)}
          onClose={handlecloseusermenu}
        >
          {options.map((option) => (
            <MenuItem key={option} onClick={() => handleOption(option)}>
              <Typography sx={{ textAlign: 'center' }}>{option}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
}

export default ProfileIcon;