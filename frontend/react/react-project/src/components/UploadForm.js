// TODO: answer here
import { Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  FormControl,
  Input,
  Container,
  AspectRatio,
  Stack,
  Heading,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  useDisclosure,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody
 } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";

const PreviewImage = () => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://user-images.githubusercontent.com/30518462/170499091-2bb9c6c8-2d1a-40d6-b8c7-cd6691043ab5.png")`}
    />
  );
}

function fileReader(file) {
  if (file === '') return ''
  const reader = URL.createObjectURL(file)
  console.log(reader)
  return reader
}

export default function UploadForm({onSubmit, isOpen, onClose}) {
  // TODO: answer here
  const [file, setFile] = useState('')
  const [url, setUrl] = useState('')
  const [caption, setCaption] = useState('')
  const { isOpen:openAlert, onOpen:onOpenAlert, onClose:closeAlert } = useDisclosure()

  useEffect(() => {
    setUrl(fileReader(file))
  }, [file])

  const postContent = () => {
    console.log('clicked')
    if (file === '' && caption === '') {
      onOpenAlert()
    } else {
      onSubmit(caption, file)
      onClose()
    }
  } 
  return (
    <>
    <form aria-label="Upload Form">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader border={'1px'} borderColor={"gray.200"}><Text align={"center"}>Create new post</Text></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <Container my="12" display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
              <AspectRatio width="64" ratio={1}>
                <Box
                  borderColor="gray.300"
                  borderStyle="dashed"
                  borderWidth="2px"
                  rounded="md"
                  shadow="sm"
                  role="group"
                  transition="all 150ms ease-in-out"
                  _hover={{
                    shadow: "md"
                  }}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <Box position="relative" height="100%" width="100%">
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      height="100%"
                      width="100%"
                      display="flex"
                      flexDirection="column"
                    >
                      <Stack
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justify="center"
                        spacing="4"
                        backgroundImage={`url(${url})`}
                        backgroundPosition={"center"}
                        backgroundSize={'contain'}
                        backgroundRepeat={'no-repeat'}
                      >
                        <Box height="16" width="12" position="relative" hidden={Boolean(file !== "")}>
                          <PreviewImage
                            backgroundImage="url('https://user-images.githubusercontent.com/30518462/170499091-2bb9c6c8-2d1a-40d6-b8c7-cd6691043ab5.png')"
                          />
                          <PreviewImage
                            backgroundImage="url('https://user-images.githubusercontent.com/30518462/170499091-2bb9c6c8-2d1a-40d6-b8c7-cd6691043ab5.png')"
                          />
                          <PreviewImage
                            backgroundImage={`url("https://user-images.githubusercontent.com/30518462/170499091-2bb9c6c8-2d1a-40d6-b8c7-cd6691043ab5.png")`}
                          />
                        </Box>
                        <Stack p="8" textAlign="center" spacing="1" hidden={Boolean(file !== "")}>
                          <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                            Drop images here
                          </Heading>
                          <Text fontWeight="light">or click to upload</Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <Input
                      type="file"
                      onClick={(e) => console.log(e)}
                      // onChange={(e) => console.log('changed', e.target.files)} 
                      onChange={(e) => setFile(e.target.files[0])} 
                      height="100%"
                      width="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      opacity="0"
                      aria-hidden="true"
                      accept=".jpg, .png, .gif"
                      aria-label="Image Input"
                    />
                  </Box>
                </Box>
              </AspectRatio>
              <Input 
                aria-label="Caption Input"
                placeholder="Type your caption here" 
                hidden={file === ''} 
                value={caption}
                onChange={(e) => setCaption(e.target.value)}/>
            </Container>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={postContent} variant='solid' colorScheme={"messenger"} aria-label="Submit Button">Post</Button>
        </ModalFooter>

        <AlertDialog
        motionPreset="slideInBottom"
        size={"sm"}
        onClose={closeAlert}
        isOpen={openAlert}
        isCentered>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Gagal posting</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Pastikan gambar dan caption terisi
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </ModalContent>
      </form>
    </>
  )
}