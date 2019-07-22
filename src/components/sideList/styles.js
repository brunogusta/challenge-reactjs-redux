import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 320px;
  min-height: 600px;
  background: white;
  border: solid 1px #ccc;
  border-radius: 5px;
  left: 2vh;
  top: 10vh;
  z-index: 10;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 8px;

    li {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      button {
        width: 10px;
        background: none;
        border: none;
        margin-left: 45px;

        i {
          font-size: 18px;
          color: #ff0000;
          cursor: pointer;
        }

        &:nth-child(2n) {
          margin-left: 20px;

          i {
            color: #ccc;
          }
        }
      }

      p {
        margin-left: 15px;
        width: 135px;
        span {
          display: block;

          &:nth-child(2n) {
            font-size: 14px;
            color: #ccc;
          }
        }
      }
    }
  }
`;

export const Border = styled.div`
  height: 1px;
  width: 220px;
  background: #f9d5d5;
`;
