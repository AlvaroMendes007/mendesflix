import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    transition-delay: .5s;
    width: 400px;
    height: 300px;
  }

  @media (max-width: 800px) {
    &:hover,
    &:focus {
    opacity: .5;
    transition-delay: .5s;
    width: 380px;
  }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
