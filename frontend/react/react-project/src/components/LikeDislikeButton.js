// TODO: answer here
import { Flex, IconButton, Box, Text, Button } from "@chakra-ui/react"
import { Icon } from '@chakra-ui/react'
import { useContext, useEffect, useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { PostListProfileContext } from "./Profile";

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    const {postList, setPostList} = useContext(PostContext)
    const {postList: postListProfile, setPostList: setPostProfile} = useContext(PostListProfileContext)
    const [liked, setLiked] = useState(isLiked)
    const [dislike, setDisliked] = useState(isDisliked)
    const [likeCounting, setLikeCounting] = useState(likeCount)
    const [dislikeCounting, setDislikeCounting] = useState(dislikeCount)

    useEffect(() => {
        if (!postList.length > 0) {
            getPostList()
        }

    }, [])

    const getPostList = async () => {
        try {
            const response = await axios.get('/post/list')
            const {data} = response
            setPostList(data.data)
        }
        catch(error) {
            console.log(error)
        }
    }

    const setFillLike = async (id) => {
        console.log('like clicked')
        console.log('like: ', liked)
        let likeBefore = liked
        try {
            likeBefore = !likeBefore
            setLiked(likeBefore)

            if (likeBefore) {
                if (dislike) {
                    setDislikeCounting(dislikeCounting => dislikeCounting - 1)
                    setDisliked(dislike => !dislike)
                }
                setLikeCounting(likeCounting => likeCounting + 1)
            } else {
                setLikeCounting(likeCounting => likeCounting - 1)
            }

            const response = await axios.get(`/post/${id}/${likeBefore ? 'like' : 'unlike'}`)
            setPostList(postList.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        liked : likeBefore,
                        likeCount : (likeBefore) ? likeCounting + 1 : likeCounting - 1,  
                        dislikeCount : (likeBefore && dislike) ? dislikeCounting - 1 : dislikeCounting - 0,
                        disliked : (likeBefore && dislike) ? !dislike : dislike,
                    }
                }
                return post
            }))

            setPostProfile(postListProfile.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        liked : likeBefore,
                        likeCount : (likeBefore) ? likeCounting + 1 : likeCounting - 1,  
                        dislikeCount : (likeBefore && dislike) ? dislikeCounting - 1 : dislikeCounting - 0,
                        disliked : (likeBefore && dislike) ? !dislike : dislike,
                    }
                }
                return post
            }))

            console.log(response)
        }
        catch(error) {
            console.log(error)
        }
    }

    const setFillDislike = async (id) => {
        let dislikeBefore = dislike
        try {
            dislikeBefore = !dislikeBefore
            setDisliked(dislikeBefore)

            if (dislikeBefore) {
                if (liked) {
                    setLikeCounting(likeCounting => likeCounting - 1)
                    setLiked(liked => !liked)
                }
                setDislikeCounting(dislikeCounting => dislikeCounting + 1)
            } else {
                setDislikeCounting(dislikeCounting => dislikeCounting - 1)
            }

            const response = await axios.get(`/post/${id}/${dislikeBefore ? 'dislike' : 'undislike'}`)
            
            setPostList(postList.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        liked : (dislikeBefore && liked) ? !liked : liked,
                        likeCount : (dislikeBefore && liked) ? likeCounting - 1 : likeCounting - 0,
                        dislikeCount : (dislikeBefore) ? dislikeCounting + 1 : dislikeCounting - 1,
                        disliked : dislikeBefore,
                    }
                }
                return post
            }))

            setPostProfile(postListProfile.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        liked : (dislikeBefore && liked) ? !liked : liked,
                        likeCount : (dislikeBefore && liked) ? likeCounting - 1 : likeCounting - 0,
                        dislikeCount : (dislikeBefore) ? dislikeCounting + 1 : dislikeCounting - 1,
                        disliked : dislikeBefore,
                    }
                }
                return post
            }))
            
            console.log(response)
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <Box p={3}>
            <Flex>
                <IconButton aria-label="Like Button" onClick={() => setFillLike(id)} icon={(liked && !dislike) ? <Icon as={BsHandThumbsUpFill} boxSize={'24px'} color='blue.400'/> : <Icon as={BsHandThumbsUp} boxSize={'24px'} />} variant='ghost'/>
                <IconButton aria-label="Dislike Button" onClick={() => setFillDislike(id)} icon={(!liked && dislike) ? <Icon as={BsHandThumbsDownFill} boxSize={'24px'} color='red.400'/> : <Icon as={BsHandThumbsDown} boxSize={'24px'} />} variant='ghost'/>
            </Flex>
        
            <Box display={"flex"}>
                <Text fontWeight={'bold'} fontSize={'14px'} aria-label="Like Count">{likeCounting} likes</Text>
                <Text fontWeight={'bold'} fontSize={'14px'} marginLeft={'10px'} aria-label="Dislike Count">{dislikeCounting} dislikes</Text>
            </Box>
        </Box>
    )
}