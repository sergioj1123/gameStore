import styled from 'styled-components';
import colors from '../../styles/variables';

export const Itens = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Item = styled.li`
  position: relative;
  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &.show {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  z-index: 1;
  max-width: 960px;
  position: relative;

  header {
    display: flex;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  .imageContainer {
    display: flex;
    justify-content: center;
  }

  img,
  iframe {
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  iframe {
    width: 100%;
    height: 480px;
  }
`;
