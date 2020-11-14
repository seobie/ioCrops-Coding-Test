import { css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexRowCenter = css`
  display: flex;
  justify-content: center;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const theme = {
  flexCenter,
  flexRowCenter,
  flexColumn,
  flexColumnCenter,
};

export default theme;
