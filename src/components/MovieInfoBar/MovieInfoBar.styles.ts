import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .stats-column {
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 4px;
    margin: 0 20px;
    flex: 1;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .stats-column {
      margin: 20px 0;
    }
  }
`;
