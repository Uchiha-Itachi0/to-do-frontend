import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
position: fixed;
padding: 2em;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: var(--background);
z-index: 1005;
inset: 0;

.message_container_heading{
    font-size: max(1.5vw, 1.5rem);
}
`;
const Message = ({
    messageText
}) => {
  return (
    <MessageContainer>
        <h1 className="message_container_heading">{messageText}</h1>
    </MessageContainer>
  )
}

export default Message