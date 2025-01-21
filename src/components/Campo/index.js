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

function Campo({ placeholder, login, aoAlterado, type }) {
    return (
        <>
            <InputContainer
                placeholder={placeholder}
                type={type}
                value={login}
                onChange={(e) => aoAlterado(e.target.value)}>
            </InputContainer>
        </>
    )
}
export default Campo