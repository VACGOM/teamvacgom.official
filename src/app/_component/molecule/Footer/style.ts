import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  border-top: 1px solid var(--Gray-Gray-200, #e5e8eb);
  display: flex;

  padding: 70px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-left:-40px;
  margin-right:-40px;
`;

export const Nav = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  color: var(--Gray-Gray-500, #8b95a1);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
