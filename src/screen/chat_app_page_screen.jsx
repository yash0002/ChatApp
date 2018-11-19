/**
 * @description chat app page display
 * @author Yash
 * @module Screen
 * @since 16/11/2018
 * @version 2.0
 */
import React from 'react';
import Chat_App_Message_Display_Component from '../component/chat_app_message_display_component';
import Chat_App_Message_type_Component from '../component/chat_page_message_type_component';
import Logout_component from '../component/logout_component';
/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Chat_App_Page_Screen extends React.Component
{    
    render() {
        return (
            <div className = "centre-content">
                <br/>
                <img src = {require('../images/messaging_logo.jpg')} alt="User Registration" id = "image-inline-div-chatting-page" />
                <Chat_App_Message_Display_Component/>
                <Chat_App_Message_type_Component/>
                <Logout_component />
            </div>
        );
    }
}

/**
 * @exports Register Class as Component in react tech
 */
export default Chat_App_Page_Screen;