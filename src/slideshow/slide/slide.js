import React from 'react';
import styled from 'styled-components';

export default ({ title, titleStyle, content, contentStyle, slideStyle }) => {

  const Slide = styled.div`${slideStyle}`
  const Title = styled.h1`${titleStyle}`
  const Content = styled.p`${contentStyle}`

  return (
    <Slide className="slide">
      <Title>{title}</ Title>
      <Content>{content}</Content>
    </Slide>
  )
}
