import styled from 'styled-components';

export const Footer__Container = styled.footer`
  position: relative;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  margin: auto 16px 16px 16px;
  font-size: 0.85rem;
  color: white;
  & span {
    font-weight: 700;
    color: white;
  }
`;

export const Footer__Socials = styled.div`
  display: flex;
  gap: 8px;
`;

export const Footer__SocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
    transition: color 150ms ease-in-out;
  }
  &:hover svg {
    color: ${(props) => props.theme.textColor};
  }
`;
