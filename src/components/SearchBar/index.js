import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './SearchMocks'

const SearchBarContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 260px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Results = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }

`

export default function SearchBar() {
    const [searchBooks, setSearchBooks] = useState([])

    return (
        <SearchBarContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input
                placeholder="Escreva sua proxima leitura"
                onBlur={event => {
                    const inputText = event.target.value
                    const SearchResults = livros.filter(livro => livro.nome.includes(inputText))
                    setSearchBooks(SearchResults)
                }}
            />
            {searchBooks.map(livro => (
                <Results>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </Results>
            ))}
        </SearchBarContainer>

    )
};
