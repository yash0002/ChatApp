/**
 * @description this is for chats display page component
 * @author  Yash
 * @since   11/11/2018
 * @version 1.5.
 * @module axios, react, material-ui
 */
import React, { Component } from "react";
import chat_service from '../services/chat_service';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class UsersLoginComponent extends Component {

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */
    constructor(props) {
        super(props);
        this.state = {
            user_login_display: []
        }
    }
    componentDidMount() {

        var self = this;
        chat_service.chat_app_users_login(function (list) {

            if (list !== null && list !== undefined) {
                self.setState({
                    user_login_display: list
                })
            }
            else {
                self.setState({
                    user_login_display : []
                })
            }
        })
    }

    render() {
        return (
            <div styles = {styles.root}>
            <CssBaseline />
            <AppBar position="fixed" styles = {styles.appBar}>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Clipped drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer styles = {styles.drawer} variant="permanent"
            //  classes={{
            //     paper: classes.drawerPaper,
            //   }}
            >
              <div styles = {styles.toolbar}/>
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
        );
    }
}

/**
 * @exports UsersLoginComponent Class as Component in react tech
 */
export default UsersLoginComponent;