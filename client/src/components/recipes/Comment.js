import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'

function Comment({comment}) {

console.log(comment)

  return (
    <Card>
     
     
        <p>{comment.comment}</p>
        <p>from: {comment.user.username}</p>
        <div>
          {
            [...Array(5)].map((star, i)=>{
                return (
                <label>
                    <input type="radio" name="rating" value={i} />
                    <FaStar  color={i < comment.rating ? "#ffc107":""}size={20} />
                </label>
                
                )
            }) 
          }
        </div>
        
        
                
    </Card>
  );
}

export default Comment;