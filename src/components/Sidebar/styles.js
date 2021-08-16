import { css, cx } from '@emotion/css'

export const sidebarContainer = css`
  width: 100%;
  display: grid;
  grid-auto-rows: 12vh 87px 75vh;
  border-right: 1px solid #ccc;

  @media screen and (max-width: 480px) {
    display:none;
  }
`;

export const sidebarHeader = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 1em;
  border-bottom: 1px solid #ccc;
`;
export const sidebarHeaderRight = css`
  display: grid;
  grid-auto-flow: column;

  & .MuiSvgIcon-root{
    font-size: 1.3rem;
  }

  & button {
    padding: 0.6rem;
  }
`;
export const userContainer = css`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 5px;

  & h4{
    font-size: 1.2rem;
    margin-bottom: 0.2em;
    font-weight: bold;
  }

  & p {
    font-size: 0.9rem;
  }
`;
export const logoutBtn = css`
  cursor: pointer;
`;
export const sidebarSearchContainer = css`
  display: grid;
  align-items: center;
  background-color: #f6f6f6;
  padding: 0.8em 1em;
  grid-template-columns: auto 1fr;
  background-color: #fff;
`;
export const sidebarSearchInput = css`
  border: none;
  padding: 5px 2px;
  overflow: hidden;
  
  :focus{
    outline: 2px solid #bfe0ff;
  }
`;

export const sidebarChats = css`
  background-color: #fff;
`;
export const sidebarChatRoomContainer = css`
  overflow-y: scroll;
  max-height: 100%;
  padding-bottom: 30px;
`;
export const sidebarChatRoom = css`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5em;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  border-bottom: 1px solid #efefef;
  font-size: 0.75rem;
  background-color: #fff;

  &:hover {
    background-color: #eee;
  }

  & h3{
    margin-bottom: 0.25em;
    font-size: 1.2rem;
  }
`;
export const active = css`
  background-color: #dbdbdb !important;
`;


export const addChatBtn = css`
  padding: 0.7em 1em;
  cursor: pointer;
  border-bottom: 1px solid #000;
  width: 100%;
  color: #fff !important;
  background-color: #51a0d5 !important;
`;

export const logo = css`
  color: #51a0d5;
`;