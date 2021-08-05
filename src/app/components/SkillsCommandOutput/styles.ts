import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: var(--lineHeight);
`;

export const CategoryWrapper = styled.div`
  margin-top: calc(var(--lineHeight) * 2);
  
  :first-child {
    margin-top: var(--lineHeight);
  }
`;

export const CategoryHeader = styled.div`
  line-height: var(--lineHeight);
`;

export const CategorySkills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--lineHeight);

  @media (min-width: 900px) {
    margin-right: 5ch;
  }
`;

export const SkillName = styled.div`
  display: flex;
  
  @media (min-width: 900px) {
    margin-right: 1ch;
  }
`;

export const SkillLevel = styled.div`
  display: flex;
`;