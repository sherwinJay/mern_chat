import { css, cx } from '@emotion/css'

export const homeContainer = css`
  display: grid;
  place-content: center;

  & h1 {
    color: #cdcdcd;
    font-size: 3.3rem;
    margin-top: 0.7em;
  }

  @media screen and (max-width: 480px) {
    height: 100vh;
    padding: 1.5em;

    & h1 {
      font-size: 2rem;
      margin-top: 1.25em;
    }
  }
`;
export const homeImg = css`
  width: 400px;
  
  @media screen and (max-width: 480px) {
   width: 100%;
  }
`;
export const homeHeader = css`
  display: none;
  @media screen and (max-width: 480px) {
    display: grid;
    background-color: #fff;
    position: absolute;
    top: 1em;
    justify-content: end;
    right: 1em
  }
`;