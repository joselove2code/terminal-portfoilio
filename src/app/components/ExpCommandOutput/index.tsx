import React from 'react'
import { ExpDescription, ExpDetails, ExpHeader, ExpWrapper, Wrapper } from './styles';


type Exp = {
  at: string,
  atLink?: string,
  position: string,
  from: string | number,
  to: string | number,
  description: string,
}

const ExpCommandOutput: React.FC = () => {
  const exps: Exp[] = [
    {
      position: 'Full-stack Engineer',
      at: 'As a Freelancer',
      from: 2015,
      to: 'Present Day',
      description: 'Building several small/medium size projects.',
    },
    {
      position: 'Instructor Professor',
      at: 'At Universidad de Cienfuegos',
      atLink: 'https://www.ucf.edu.cu/',
      from: 2016,
      to: 2020,
      description: 'Teaching Web Programming and Web Security.',
    },
    {
      position: 'Full-stack Engineer',
      at: 'At Enkarga',
      atLink: 'https://enkarga.com',
      from: 2017,
      to: 2019,
      description: 'Building a large system integrating several marketplaces (Amazon, Best Buy, Mercado Libre, Shopify, etc).',
    },
    {
      position: 'Full-stack Engineer',
      at: 'At Hosttate',
      atLink: 'https://hosttate.com',
      from: 2020,
      to: 'Present Day',
      description: 'Building a variety of tools integrating rental platforms such as Airbnb and Booking.com.',
    },
  ];

  return (
    <Wrapper>
      {exps.map(({ at, atLink, position, from, to, description }) => (
        <ExpWrapper key={at}>
          <ExpHeader href={atLink} target="_blank">
            {at}
          </ExpHeader>
          <ExpDetails>
            As a {position} from {from} to {to}.
          </ExpDetails>
          <ExpDescription>
            {description}
          </ExpDescription>
        </ExpWrapper>
      ))}
    </Wrapper>
  )
};

export default ExpCommandOutput;
