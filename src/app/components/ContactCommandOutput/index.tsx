import React from 'react'
import { LinkWrapper, LinkUrl, Wrapper } from './styles';

type Link = {
  name: string;
  url: string;
}

const ContactCommandOutput: React.FC = () => {
  const links: Link[] = [
    {
      name: 'Email',
      url: 'mailto:joselove2code@gmail.com',
    },
    {
      name: 'LinkedIn profile',
      url: 'https://www.linkedin.com/in/jose-ignacio-cruz-moreira-7a6701106/',
    },
    {
      name: 'Github profile',
      url: 'https://github.com/joselove2code',
    },
    {
      name: 'Twitter account',
      url: 'https://twitter.com/joselove2code',
    },
  ];

  return (
    <Wrapper>
      {links.map(({ name, url }) => (
        <LinkWrapper key={name}>
          - <LinkUrl href={url} target="_blank">{name}</LinkUrl>
        </LinkWrapper>
      ))}
    </Wrapper>
  )
};

export default ContactCommandOutput;
