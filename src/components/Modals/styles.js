import { css, cx } from '@emotion/css'

export const createRoomContainer = (isShow) => css`
  display: ${ isShow ? 'grid' : 'none'};
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
`;

export const createRoomForm = css`
  display: grid;
  background-color: #fff;
  padding: 2em;
  border-radius: 0.4em;
  position: relative;

  & p {
    margin: 20px 0 10px;
  }

  & input {
    width: fill-available;
    padding: 0.25em 0.5em;
    border: 1px solid #ccc;

    &:focus{
      outline: 2px solid #bfe0ff;
    }
  }

`;

export const closeBtn = css`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;