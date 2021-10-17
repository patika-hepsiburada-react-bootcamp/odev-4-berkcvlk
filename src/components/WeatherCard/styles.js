import styled from "styled-components";

export const Card = styled.div`
  position: relative;

  width: 375px;
  height: 600px;

  padding: 20px;

  border-radius: 20px;
  background-color: #fff;
`;

export const OverflowedContent = styled.div`
  position: absolute;

  top: 100px;
  width: calc(100% + 150px);
  height: 195px;

  // Half of 150px + (totalpayX / 2);
  transform: translateX(-95px);
  z-index: 2;
`;

export const WeatherImage = styled.img`
  width: 100%;
  max-height: 100%;
`;

export const Margin = styled.div`
  width: 100%;
  margin-top: 245px;
`;

export const City = styled.h1`
  font-size: 21px;
  font-weight: 700;

  color: #454bb4;
  margin: 0;

  text-transform: uppercase;
`;

export const Temperature = styled.h1`
  font-size: 62px;
  font-weight: 700;

  color: #454bb4;
  margin: 0 0 32px 0;
`;

export const Detail = styled.div`
  & + & {
    margin-top: 18px;
  }
`;

export const DetailTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;

  color: #464646;
  margin: 0;

  text-transform: uppercase;
`;

export const DetailDesc = styled.p`
  font-size: 21px;

  color: #464646;
  margin: 0;
`;
