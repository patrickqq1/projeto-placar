import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Select,
  useDisclosure
} from '@chakra-ui/react';

const CadastroJogador = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Cadastrar jogador</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de jogador</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nome:</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Time:</FormLabel>
              <Select>
                <option value="time1">Time 1</option>
                <option value="time2">Time 2</option>
                <option value="time3">Time 3</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row">
              <Button colorScheme="green">Cadastrar</Button>
              <Button colorScheme="red">Cancelar</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CadastroJogador;
