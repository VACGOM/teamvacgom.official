import styled from '@emotion/styled';

export const NavButton = styled.div`
  display: flex;
  height: 56px;
  min-width: 70px;
  padding: 19px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Gray-Gray-200, #E5E8EB);
  background: ${({ selected }) => selected ? 'var(--Primary, #4196FD)' : 'var(--Gray-White, #FFF)'};
`;

export const NavButtonText = styled.div`
  color: ${({ selected }) => selected ? 'var(--Gray-White, #FFF)' : 'var(--Gray-Gray-700, #4E5968)'};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;