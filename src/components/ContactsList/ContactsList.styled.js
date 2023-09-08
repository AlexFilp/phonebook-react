import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;
  padding-top: 45px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    border: 2px solid ${pr => pr.theme.color.accentColor};
    border-radius: 10px;
    width: 580px;
    margin: 0 auto;
    overflow-y: scroll;
    height: 600px;
    padding: 20px;
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
