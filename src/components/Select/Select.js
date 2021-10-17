import { useState } from "react";

import * as S from "./styles";

const Select = ({ options, onChange, selectedIndex: index }) => {
  const [selectedIndex, setSelectedIndex] = useState(index);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    onChange(index);
    handleToggle();
  };

  return (
    <S.Select>
      <S.Anchor onClick={handleToggle}>
        {options[selectedIndex].text}
        <S.Arrow needRotation={isActive} />
      </S.Anchor>
      {isActive && (
        <S.Menu>
          {options.map(({ text, id }, index) => (
            <S.Item key={id} onClick={() => handleItemClick(index)}>
              {text}
            </S.Item>
          ))}
        </S.Menu>
      )}
    </S.Select>
  );
};

export default Select;
