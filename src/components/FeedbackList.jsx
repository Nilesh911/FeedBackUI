import React from 'react'

function FeedbackList({feedback}) {
    if(!feedback || feedback.length ===0){
        return <p>no  feedback yet </p>
    }
  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <div>{item.rating}</div>
        ))}
    </div>
  )
}

export default FeedbackList


