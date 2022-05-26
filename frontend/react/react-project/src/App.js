// TODO: answer here
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import "./App.css"


function App() {
  // TODO: answer here
  return (
    <div aria-label="App" className='App'>
        <Container maxW={'container.lg'} p={'2'} flexGrow='1' overflow={'hidden'} display='flex' flexDirection={'column'} justifyContent='center'>
          <h1 aria-label="App Title" hidden>Welcome to instagram clone</h1>
          <Outlet />
        </Container>
    </div>
  )
}

export default App
