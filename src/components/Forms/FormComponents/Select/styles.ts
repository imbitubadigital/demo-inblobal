import styled, {css} from 'styled-components';

interface TeamProps {
  isTeam?: boolean;
}

export const Container = styled.div<TeamProps>`
  background: #f3f3f3;
  flex-grow: 1;
  border-bottom: 1px solid red;
  position: relative;

  ${(props) =>
    props.isTeam
      ? css`
          padding-bottom: 3px;
          height: 46px;

          & label {
            margin-bottom: 6.5px;
            margin-left: 4px;
          }
          & select {
            margin-left: 4px;
          }

          &:after {
            content: ' ';
            background-image: url('data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzA2cHgiIGhlaWdodD0iMzA2cHgiIHZpZXdCb3g9IjAgMCAzMDYgMzA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDYgMzA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBvbHlnb24gcG9pbnRzPSIyNzAuMyw1OC42NSAxNTMsMTc1Ljk1IDM1LjcsNTguNjUgMCw5NC4zNSAxNTMsMjQ3LjM1IDMwNiw5NC4zNSIvPjwvZz48L3N2Zz4=');
            background-position: bottom;
            background-size: 50%;
            background-repeat: no-repeat;
            position: absolute;
            height: 100%;
            width: 25px;
            top: -5px;
            right: -2px;
            pointer-events: none;
          }
        `
      : css`
          height: 56px;
          padding: 8px 0;
          padding-right: 0;
          margin-right: 16px;
          margin-top: 4px;

          & label {
            margin-left: 16px;
          }

          & select {
            margin-left: 12px;
          }

          &:after {
            content: ' ';
            background-image: url('data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzA2cHgiIGhlaWdodD0iMzA2cHgiIHZpZXdCb3g9IjAgMCAzMDYgMzA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDYgMzA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBvbHlnb24gcG9pbnRzPSIyNzAuMyw1OC42NSAxNTMsMTc1Ljk1IDM1LjcsNTguNjUgMCw5NC4zNSAxNTMsMjQ3LjM1IDMwNiw5NC4zNSIvPjwvZz48L3N2Zz4=');
            background-position: bottom;
            background-size: 50%;
            background-repeat: no-repeat;
            position: absolute;
            height: 100%;
            width: 25px;
            top: -5px;
            right: 5px;
            pointer-events: none;
          }
        `}
`;

export const Label = styled.label`
  /* color: {(props) => props.theme.colors.grayDarkest};
  font-size: {(props) => props.theme.typography.smallRegular.size};
  font-weight: {(props) => props.theme.typography.smallRegular.weight};
  line-height: {(props) => props.theme.typography.smallRegular.lineHeight}; */
  margin-bottom: 8px;
`;

export const Select = styled.select`
  width: 100%;
  height: auto;
  /* font-family: {(props) => props.theme.fontFamily};
  font-size: {(props) => props.theme.typography.regular.size}; */
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  background-color: transparent;

  option {
    text-transform: none;
    color: purple;
  }

  option[value=''][disabled] {
    display: none;
  }

  &:invalid {
    text-transform: uppercase;
    /* color: {(props) => props.theme.input.placeholder};

    font-weight: {(props) => props.theme.typography.regular.weight};
    line-height: {(props) => props.theme.typography.regular.lineHeight}; */
  }
`;
