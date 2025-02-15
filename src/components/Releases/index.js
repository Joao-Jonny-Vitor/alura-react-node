import { livros } from './ReleasesMocks'
import BookImage from '../../imagens/livro2.png'
import styled from 'styled-components'
import { Title } from '../Title'
import RecomendationCard from '../RecomendationCard'

const ReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const LatestBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function Releases() {

    return (
        <ReleasesContainer>
            <Title color="#EB9B00" fontSize="36px">
                Últimos Lancamentos
            </Title>
            <LatestBooksContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </LatestBooksContainer>
            <RecomendationCard 
                title="Talvez voce tambem se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={BookImage}
            />
        </ReleasesContainer>
    )
}