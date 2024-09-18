import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 40px;
  justify-content: space-between;
  align-items: center;
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
  color: var(--Gray-Gray-800, #333D4B);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
