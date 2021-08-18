import { css, cx } from '@emotion/css'

export const chatContainer = css`
  display: grid;
  grid-template-rows: 12vh 78vh 10vh;
  height: fit-content;
`;

export const chatBody = css`
  padding: 2em 1.5em;
  overflow-y: scroll;
  max-height: 100%;
  background-color: #f6f6f6;
`;

export const chatUsername = css`
  position: absolute;
  top: -16px;
  font-size: 0.6rem;
  font-weight: bold;
`;

export const chatTimestamp = css`
  color: #aaa;
  font-size: 0.6rem;
  margin-left: 1.5em;
`;

