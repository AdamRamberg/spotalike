import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import { Paragraph } from '../components/Typography';
import Tooltip from '../compositions/ShareAndRateTooltip';

const HeroParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(4)};
`;

const HeroParagraph = styled.p`
  /* NOTE: Below is not 100% accurate according to the sketch. Adjusted it work with the type scale and the Montserrat font. */
  ${({ theme }) =>
    theme.typeScale({ size: 'xl', lineHeight: 1.33, weight: 300 })};
  color: ${({ theme }) => theme.colors.onPrimary};
  margin: 0;
  max-width: 56rem;
`;

const TextWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(4)};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.onBackgroundSecondary};
  ${({ theme }) => theme.typeScale({ size: 'large', lineHeight: 1.6 })};
`;

const About = () => {
  const [iconElement, setIconElement] = useState(null);
  const iconRef = useCallback(
    element => {
      if (element !== null && iconElement !== element) {
        setIconElement(element);
      }
    },
    [iconElement],
  );

  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  return (
    <>
      {iconElement && (
        <Tooltip
          close={() => setIsTooltipOpen(false)}
          isOpen={isTooltipOpen}
          target={iconElement}
        />
      )}
      <Hero
        topRowProps={{
          leftComponent: <Icon iconKey="arrow-left" as="a" href="/" />,
          title: 'About',
          rightComponent: (
            <>
              <Icon
                ref={iconRef}
                iconKey="more"
                as="button"
                onClick={() => setIsTooltipOpen(!isTooltipOpen)}
              />
            </>
          ),
        }}
        height="auto"
      >
        <HeroParagraphWrapper>
          <HeroParagraph>
            Spotalike is a playlist service for Spotify based on similar songs
            according to Last.fm.
          </HeroParagraph>
        </HeroParagraphWrapper>
      </Hero>
      <TextWrapper>
        <Heading>Spotalike</Heading>
        <Paragraph>
          Postcards have been consistently one of the more popular collectibles
          and used as promotional materials. More and more business owners are
          turning to color postcards as a good way of promoting their products
          and services. This is simply because postcards don’t have to be
          opened. It won’t get lumped in with all the mail envelopes that people
          usually toss without opening.
        </Paragraph>
        <Paragraph>
          Business owners can’t afford to make mistakes when it to comes to
          their promotional materials. They spend a considerable amount of money
          in it so they would want them to bring greater sales and profits to
          their business. Thus, if the postcard reveals a glossy, professional
          attractive picture, the recipient will likely look at the picture and
          turn it over to see who sent it.
        </Paragraph>
      </TextWrapper>
    </>
  );
};

export default About;
