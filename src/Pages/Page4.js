import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default() => {
    return <MuiThemeProvider>
        <div>
            <List>
                <ListItem primaryText="Inbox" leftIcon={< ContentInbox />}/>
                <ListItem primaryText="Starred" leftIcon={< ActionGrade />}/>
                <ListItem primaryText="Sent mail" leftIcon={< ContentSend />}/>
                <ListItem primaryText="Drafts" leftIcon={< ContentDrafts />}/>
                <ListItem primaryText="Inbox" leftIcon={< ContentInbox />}/>
            </List>
            <Divider/>
            <List>
                <ListItem primaryText="All mail" rightIcon={< ActionInfo />}/>
                <ListItem primaryText="Trash" rightIcon={< ActionInfo />}/>
                <ListItem primaryText="Spam" rightIcon={< ActionInfo />}/>
                <ListItem primaryText="Follow up" rightIcon={< ActionInfo />}/>
            </List>
        </div>
    </MuiThemeProvider>
}