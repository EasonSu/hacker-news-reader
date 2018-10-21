import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Card = styled.li`
  position: relative;
  margin-bottom: 12px;
  padding: .75em 1.75em;
  box-shadow: 0 0 0 1px #e1e4e8 inset, 0 2px 4px rgba(0,0,0,.15);
  border-radius: 3px;
  background-color: #fff;
  animation: ${fadeIn} 1s cubic-bezier(.19, 1, .22, 1);
  &:before {
    content: '#' attr(data-no);
    position: absolute;
    left: .5em;
    top: 0.1em;
    font-size: .875em;
    color: #767e89;
  }
`;

export default Card;
