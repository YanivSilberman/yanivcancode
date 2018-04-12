import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SideNav = styled.div`
  margin: auto;
  margin-bottom: 5px;
  padding: 20px 0px;
  border-bottom: 0px;
  display: flex;
  flex-direction: rows;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  position: fixed;
  width: 80%;
  z-index: 9999;
  left: 0;
  right: 0;
`;

export const ToggleBtn = styled.i`
  position: absolute;
  left: 0;
  top: 40px;
  font-size: 25px;
`;
