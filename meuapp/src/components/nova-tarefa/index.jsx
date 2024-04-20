import {Button, ButtonGroup, Input ,Checkbox, CheckboxGroup } from '@chakra-ui/react'

function NovaTarefa(){
    return(
        <>
            <Input htmlSize={50} width='auto' placeholder='Digite o título da tarefa' />
            <Checkbox colorScheme='green'>Realizada ?  </Checkbox>
            <Button colorScheme='blue'>Inserir</Button>
        </>

    )
}

export default NovaTarefa