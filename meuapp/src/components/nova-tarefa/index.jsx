import {Box, Button, ButtonGroup, Input ,Checkbox, CheckboxGroup } from '@chakra-ui/react'

function NovaTarefa(){
    return(

        <Box width="500px" height="50px"  display="flex" alignItems="center" margin={2} >
            <Box  flex="1">
                <Input placeholder='Digite o título da tarefa' />
            </Box>
            
            <Box ml={4} >
                <Checkbox colorScheme='green'>Realizada ?  </Checkbox>
                <Button colorScheme="blue" size='sm' ml={2}>Inserir</Button>
            </Box>
      </Box>

    )
}

export default NovaTarefa