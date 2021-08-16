import { css, cx } from '@emotion/css'

export const loginContainer = css`
  background-color: #51a0d5;
  display: grid;
  place-content: center;
  grid-template-rows: auto auto;
  width: 100vw;
  height: 100vh;
  text-align: center;
  & h1 {
    margin-bottom: 1em;
  }
`;

export const loginBox = css`
  padding: 1.8em 5em;
  background-color: #fff;
  border-radius: 0.5em;
  display: grid;
  place-items: center;

  & img {
    width: 10em;
    margin-bottom: 1em;
  }
`;