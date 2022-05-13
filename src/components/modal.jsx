import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
position: fixed;
inset: 0;
background: rgba(0, 0, 0, .4);
`;
const  Modal = ({
    modalClickHandler
}) => {
  return (
    <ModalStyle onClick={modalClickHandler}></ModalStyle>
  )
}

export default Modal