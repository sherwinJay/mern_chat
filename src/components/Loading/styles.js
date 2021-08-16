import { css, cx } from '@emotion/css'

export const loginWrapper = css`
  display: grid;
  place-items: center;
  background-color: #51a0d5;
  height: 100vh;
`;
export const loadingContainer = css`
  display: grid;
  place-items: center;
  padding: 2em 5.5em;
  border-radius: 1.3em;
  grid-gap: 3.5em;

  & img {
    width: 150px;
  }
`;