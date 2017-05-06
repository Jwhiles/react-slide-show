import React from 'react';

export default ({ title, content, backgroundColor }) => {

  const slideStyle = {
    background: backgroundColor
  }
  return (
    <div className="slide" style={slideStyle}>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  )
}
