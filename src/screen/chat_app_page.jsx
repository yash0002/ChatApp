import React from 'react';
import Chat_App_component from '../component/chat_page_component';

class Chat_App_Page extends React.Component
{    
    render() {
        return (
            <div class = "centre-content">
                <br/><br/><br/>
                <img src = {require('../images/user_image.jpg')} alt="User Registration" id = "img-inline-div" /><br />
                <Chat_App_component />
            </div>
        );
    }
}
    
export default Chat_App_Page;