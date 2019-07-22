import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  opacity: 1;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 350px;
  height: 170px;
  background: white;
  border-radius: 5px;

  strong {
    font-size: 20px;
  }

  input {
    margin-top: 20px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #ccc;
    padding: 0px 20px;
  }
`;

export const Footer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  button {
    padding: 5px;
    width: 140px;
    height: 40px;
    background: #54a759;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:nth-child(2n) {
      margin-left: 15px;
    }
  }
`;
