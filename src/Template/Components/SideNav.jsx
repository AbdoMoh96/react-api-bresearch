import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [openClients, setOpenClients] = React.useState(false);

  const handleClientClick = () => {
    setOpenClients(!openClients);
  };



  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Bresearch Admin Panel
        </ListSubheader>
      }
      className="side_nav"
    >
      {/* <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem> */}

      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="DashBoard" />
      </ListItem>


    {/* nested start here */}
      <ListItem button onClick={handleClientClick} id="event" >
        <ListItemIcon>
        <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Clients" />
        {openClients ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openClients} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <ListItem button component={Link} to="/clients" className={classes.nested}>
            <ListItemIcon>
            <VisibilityIcon/>
            </ListItemIcon>
            <ListItemText primary="View Clients" />
          </ListItem>

          <ListItem button component={Link} to="/clients/create" className={classes.nested}>
            <ListItemIcon>
              <AddCircleOutlineIcon/>
            </ListItemIcon>
            <ListItemText primary="Create New Client" />
          </ListItem>

        </List>
      </Collapse>
    {/* nested end here */}


    </List>
  );
}
