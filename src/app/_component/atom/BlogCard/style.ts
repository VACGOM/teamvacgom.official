import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  max-width: 285px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Thumbnail = styled.div`
  border-radius: 10px;
  height: 200px;
  align-self: stretch;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.div`
  color: var(--Gray-Gray-900, #191F28);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImageContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export const Name = styled.span`
  color: var(--Gray-Gray-900, #191F28);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const Job = styled.span`
  color: var(--Primary, #4196FD);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;