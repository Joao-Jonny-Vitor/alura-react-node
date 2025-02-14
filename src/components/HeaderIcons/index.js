
import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

export default function HeaderIcons() {
    const Icons = styled.ul`
        display: flex;
        align-items: center;
    `
    const Icon = styled.li`
        margin-right: 40px;
        width: 25px;
    `

    const icons = [Perfil, Sacola]

    return (
        <Icons>
            {icons.map((icon) => (
                <Icon><img src={icon}></img></Icon>
            ))}
        </Icons>
    )
};
