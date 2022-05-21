import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Modal from './modal';

const MessageContainer = styled.div`
position: fixed;
padding: 2em;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: var(--background);
z-index: 1005;
box-shadow: 0px 0px 2px var(--fontColor);
text-align: center;
min-width: 25vw;
.message_container_heading{
    font-size: max(1.5vw, 1.5rem);
    color: var(--fontColor);
}
button{
  margin-top: 1.5em;
}
`;
const Message = ({
  messageText,
  setShowMessage,
  showMessage
}) => {
  const messageButtonClicked = () => setShowMessage({...showMessage, messageState: false});
  return (
    <>
    <Modal modalClickHandler={() => messageButtonClicked()}/>
      <MessageContainer>
        <h1 className="message_container_heading">{messageText}</h1>
        <Button buttonDisable={false} clickHandler={() => messageButtonClicked()}>OK</Button>
      </MessageContainer>
    </>
  )
}

export default Message