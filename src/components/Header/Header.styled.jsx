import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  min-height: 70px;
  padding: 0 15px 5px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    font-size: 24px;
    text-decoration: none;
    color: currentColor;

    &:hover {
      color: orange;
    }
  }
`;
