import styled from "styled-components"

const InputContainer = styled.input`
font-family: "Poppins", serif;
    width: 85%;
    padding: 12.5px;
    border: none;
    border-radius: 0;
    background-color: rgb(236, 236, 236) ;
    margin: 15px 0;
    font-size: 20px;
    
    ::placeholder {
    font-size: 20px;
}
`
const ContainerLabel = styled.label`
font-family: "Poppins", serif;
font-size: 20px;
`

function Campo({ placeholder, valor, aoAlterado, type, descricao = false, valorDescricao }) {
    return (
        <>
            {descricao && (<ContainerLabel>{valorDescricao}</ContainerLabel>)}
            <InputContainer
                placeholder={placeholder}
                type={type}
                value={valor}
                onChange={(e) => aoAlterado(e.target.value)}>
            </InputContainer >
        </>
    )
}
export default Campo