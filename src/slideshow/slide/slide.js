import React from 'react';
import styled from 'styled-components';

export default ({ title, titleStyle, content, contentStyle, backgroundColor }) => {


  const Title = styled.h1`${titleStyle}`
  const Content = styled.p`${contentStyle}`
  const slideStyle = {
    background: backgroundColor
  }
  return (
    <div className="slide" style={slideStyle}>
      <Title>{title}</ Title>
      <Content>{content}</Content>
    </div>
  )
}
