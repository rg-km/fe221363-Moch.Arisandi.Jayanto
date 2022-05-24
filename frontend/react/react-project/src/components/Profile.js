import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../api/config"
import PostCard from "./PostCard"
import LikeDislikeButton from "./LikeDislikeButton"
import { Box } from "@chakra-ui/react"

// TODO: answer here
export default function Profile(avatar) {
  // TODO: answer here
  const { id } = useParams()
  const [post, setPost] = useState([])
  const [name, setName] = useState({id:'', name:'', image:''})

  console.log(id)
  useEffect(() => {
    const loadPost = async () => {
      try {
        const userPost = await axios.get(`${API_URL}/profile/${id}`, {withCredentials:true})
        setPost(userPost.data.data.posts)
        setName(userPost.data.data.profile)
      } catch (error){
        console.log(error)
      }
    }
    loadPost()
  },[id])
  if ([]){
    <h1>Hello</h1>
  }
  return (
    <> 
    
    
    {post.length > 0 && 
    post.map((item, index) => {
      return (
        <Box key={index}>
          <PostCard userId={name.id} avatar={name.image} username={name.name} image={item.image} caption={item.content} date={item.createdAt} />
          <LikeDislikeButton id={item.id} isLiked={item.isLiked} likeCount={item.likeCount} isDisliked={item.isDisliked} dislikeCount={item.dislikeCount} />
        </Box>
      )
    })}
    </>
  )
}
