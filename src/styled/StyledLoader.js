import styled from 'styled-components';

export const FullLoader = styled.div`
  width: 100%;
  height: 100vh;
  img {
    display: block;
    animation-name: heartbeat;
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }
  @keyframes heartbeat {
    0% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;