import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Card, Button, Form} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'


function Comment({comment, handleDeleteComment, handleEditComment}) {
  const[showEditForm, setShowEditForm] = useState(false)
  const[updatedRating,setUpdatedRating]=useState(comment.rating)
  const[updatedComment,setUpdatedComment]=useState(comment.comment)

  //using this to update state when add comment is triggered
  useEffect(()=>{
    setUpdatedComment(comment.comment)
    setUpdatedRating(comment.rating)
  },[comment])



    function showDeleteEdit(){
      if ( comment.can_modify_comment){
        return (
          <>
            <Button onClick={(e) => handleDeleteComment(e,comment.id)}>Delete</Button>
            <Button onClick={(e) => toggleShowEditForm(e)}>Edit</Button>
          </>
        )
      }}
      function toggleShowEditForm(){
        setShowEditForm(!showEditForm)
      }
      
      

      if (showEditForm){
        return (
          <Card>
            <Button onClick={toggleShowEditForm}>Cancel Edit</Button>
            <Form onSubmit={(e)=> {
              handleEditComment(e,comment.id, updatedComment,updatedRating)
              toggleShowEditForm()
              } 
            }>
              <input type="text" value={updatedComment} onChange={(e)=> setUpdatedComment(e.target.value)}></input>
                
                {
                    [...Array(5)].map((star, i)=>{
                        i+=1
                        return (
                        <label>
                            <input type="radio" name="rating" value={i} onClick={()=>setUpdatedRating(i)} />
                            <FaStar className="star" color={i <= updatedRating ? "#ffc107":""}size={20} />
                        </label>
                        )
                    }) 
                }
                <Button type='submit' >Submit Edit</Button>
            </Form>
          <Card>
                <p>{updatedComment}</p>
                <p>from: {comment.user.username}</p>
                <div>
                  {
                    [...Array(5)].map((star, i)=>{
                        return (
                        <label>
                            <input type="radio" name="rating" value={i} />
                            <FaStar  color={i < updatedRating ? "#ffc107":""}size={20} />
                        </label>
                        )
                    }) 
                  }
                </div>       
            </Card>
          </Card>
          
          )
      } else {
        return (
          <Card>
              {showDeleteEdit()}
              <p>{updatedComment}</p>
              <p>from: {comment.user.username}</p>
              <div>
                {
                  [...Array(5)].map((star, i)=>{
                      return (
                      <label>
                          <input type="radio" name="rating" value={i} />
                          <FaStar  color={i < updatedRating ? "#ffc107":""}size={20} />
                      </label>
                      )
                  }) 
                }
              </div>       
          </Card>
        );
      }
    
}

export default Comment;