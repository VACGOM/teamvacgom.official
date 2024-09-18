import React, { Dispatch, SetStateAction } from 'react';
import { NavButton, NavButtonText } from './style';

interface PartNavButtonProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const PartNavButton = ({ selected, setSelected }: PartNavButtonProps) => {
  const categories = ['전체', '프론트엔드', '백엔드'];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', alignSelf: 'stretch' }}>
      {categories.map(category => (
        <NavButton
          key={category}
          onClick={() => setSelected(category)}
          selected={selected === category}
        >
          <NavButtonText selected={selected === category}>{category}</NavButtonText>
        </NavButton>
      ))}
    </div>
  );
};

export default PartNavButton;
