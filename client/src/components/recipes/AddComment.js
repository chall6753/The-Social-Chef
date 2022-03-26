import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card, Button, Form} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'

function AddComment({handleAddComment}) {
const[rating,setRating]=useState(null)
const[comment,setComment]=useState(null)


  return (
    <Card>
      <Form onSubmit={(e)=> handleAddComment(e,comment,rating)}>
        <input type="text" placeholder="add comment here" onChange={(e)=> setComment(e.target.value)}></input>
          
          {
              [...Array(5)].map((star, i)=>{
                  i+=1
                  return (
                  <label>
                      <input type="radio" name="rating" value={i} onClick={()=>setRating(i)} />
                      <FaStar className="star" color={i <= rating ? "#ffc107":""}size={20} />
                  </label>
                  )
              }) 
          }
          <Button type='submit'>Submit Comment</Button>
      </Form>
        
                
    </Card>
  );
}

export default AddComment;