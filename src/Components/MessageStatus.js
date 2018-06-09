import React, { Component } from 'react';
import '../scss/MessageStatus.css';

function MessageStatus(props) {
    return (
      <div className={(props.sending && "message-sending") ||
                      (props.error && "message-sending-error") ||
                      (props.sent && "message-sent-successful") ||
                      ""}>
        <div>
          {props.sending && "Sending..."}
          {props.sent && "Message Sent"}
          {props.error}
        </div>
      </div>
    );
}

export default MessageStatus;
