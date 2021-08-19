import { css, cx } from '@emotion/css'

export const chatContainer = css`
  display: grid;
  grid-template-rows: 12vh 78vh 10vh;
`;

export const chatHeader = css`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 0.82em;
  grid-gap: 0.5em;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;

  @media screen and (max-width: 480px) {
    grid-template-columns: auto 1fr auto;
  }
`;
export const chatMenu = css`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
  }
`

export const chatBody = css`
  padding: 2em 1.5em;
  overflow-y: scroll;
  max-height: 100%;
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

export const chatMessage = (isReceiver) => css`
  padding: 0.8em;
  background-color: ${isReceiver ? '#dcf8c6' : '#fff'};
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 2em;
  position: relative;
  margin-left: ${isReceiver ? 'auto' : '0'};
`;
export const chatFooter = css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 0.5em;
    padding: 1em;
    background-color: #fff;
    position: sticky;
    bottom: 0;
    align-items: end;

    & input {
      width: fill-available;
      border: none;
      padding: 0.5em;

      :focus{
        outline: 2px solid #bfe0ff;
      }
    }
`;