import React from 'react'
import { Hightlight } from '../Highlight';
import {
  Wrapper,
  CategoryHeader,
  CategoryWrapper,
  SkillLevel,
  SkillName,
  SkillWrapper,
  CategorySkills
} from './styles';

type Skill = {
  name: string;
  level: number;
}

type Category = {
  name: string;
  skills: Skill[];
}

const SkillsCommandOutput: React.FC = () => {
  const categories: Category[] = [
    {
      name: 'General Knowledge',
      skills: [
        {
          name: 'Algorithms and Data Structures',
          level: 10,
        },
        {
          name: 'Linux',
          level: 9,
        },
        {
          name: 'Git/Github',
          level: 9,
        },
        {
          name: 'Relational Databases (SQL)',
          level: 9,
        },
        {
          name: 'MongoDB (NoSQL)',
          level: 8,
        },
      ]
    },
    {
      name: 'Spoken Languages',
      skills: [
        {
          name: 'Spanish',
          level: 10,
        },
        {
          name: 'English',
          level: 9,
        },
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        {
          name: 'HTML5/CSS3',
          level: 10,
        },
        {
          name: 'Javascript/Typescript',
          level: 10,
        },
        {
          name: 'Python',
          level: 8,
        },
        {
          name: 'Java',
          level: 9,
        },
        {
          name: 'PHP',
          level: 9,
        },
      ]
    },
    {
      name: 'Frontend Frameworks',
      skills: [
        {
          name: 'Vue',
          level: 9,
        },
        {
          name: 'Angular',
          level: 9,
        },
        {
          name: 'React',
          level: 8,
        },
      ]
    },
    {
      name: 'Backend Frameworks',
      skills: [
        {
          name: 'NodeJS/ExpressJS',
          level: 9,
        },
        {
          name: 'NestJS',
          level: 9,
        },
        {
          name: 'Django/DRF',
          level: 8,
        },
        {
          name: 'Laravel',
          level: 9,
        },
      ]
    },
  ];

  const getHeaderLine = (header: string) => {    
    return '='.repeat(header.length);
  };

  const getLevelStr = (level: number) => {    
    return '#'.repeat(10).split('').map((ch, index) => {
      return index >= level
        ? ch
        : <Hightlight key={index}>{ch}</Hightlight>;
    });
  };

  return (
    <Wrapper>
      {categories.map(({ name, skills }) => (
        <CategoryWrapper key={name}>
          <CategoryHeader>
            {name}
            <Hightlight block>{getHeaderLine(name)}</Hightlight>
          </CategoryHeader>
          <CategorySkills>
            {skills.map(({ name, level }) => (
              <SkillWrapper key={name}>
                <SkillName>{name}:</SkillName>
                <SkillLevel>
                  [{getLevelStr(level)}]
                </SkillLevel>
              </SkillWrapper>
            ))}
          </CategorySkills>
        </CategoryWrapper>
      ))}
    </Wrapper>
  )
};

export default SkillsCommandOutput;
