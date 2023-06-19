import React from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import CadastroJogador from './components/modalCadastroJogadores'
import CadastroTime from './components/modalCadastroTimes'
import Dashboard from './components/dashboard'

const App = () => {
  return (
    <Flex direction="column" alignItems="center" minH="100vh" bg="green.200">
      <Stack direction="row" m="1%">
        <CadastroJogador />
        <CadastroTime />
      </Stack>
      <Dashboard />
    </Flex>
  )
}

export default App