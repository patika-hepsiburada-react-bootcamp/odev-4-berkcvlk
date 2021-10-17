import styled from "styled-components";

export const Select = styled.div`
  position: relative;

  width: 100%;
  height: 45px;

  font-size: 14px;
  font-weight: 500;

  color: #454bb4;
  background-color: #dde4ff;

  border-radius: 12px;
`;

export const Anchor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 12px;

  cursor: pointer;
`;

export const Arrow = styled.div`
  width: 18px;
  height: 18px;

  background-image: url("/assets/images/arrow.png");

  ${(p) => p.needRotation && "transform: rotate(180deg);"}

  transition: all .3s;
`;

export const Menu = styled.div`
  position: absolute;

  top: calc(100% + 12px);
  left: 0;

  width: 100%;
  height: 175px;
  padding: 12px;

  overflow-y: scroll;
  border-radius: 12px;

  background-color: #dde4ff;
  backdrop-filter: blur(12px);

  z-index: 10;

  ::-webkit-scrollbar {
    display: none;
  }

  animation: slideInUp 0.3s ease;

  @keyframes slideInUp {
    from {
      transform: translateY(-10px);
      opacity: 0.4;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Item = styled.div`
  color: #454bb4;
  cursor: pointer;

  & + & {
    margin-top: 12px;
  }
`;
