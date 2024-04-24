import { Box, Button } from '@chakra-ui/react'

interface Props{
    tarefa: string
}

function Tarefa({tarefa}:Props ){
    return(
        <Box width="500px" height="50px"  display="flex" alignItems="center" bg={'lightcyan'} mb={2} >
            <Box  flex="1">
                <p>{tarefa}</p>
            </Box>
            
            <Box ml={4} >
                <Button colorScheme="red" size='sm'>Pendente</Button>
                <Button colorScheme="red" size='sm' ml={2}>Excluir</Button>
            </Box>
      </Box>
    )
}

export default Tarefa