import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

export const ActorInfo = styled.li`
  overflow: hidden;
  width: 300px;
  border-radius: 20px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Image = styled.img`
  object-fit: cover;
`;
