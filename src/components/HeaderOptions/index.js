import styled from 'styled-components'

export default function HeaderOptions() {

    const Menu = styled.ul`
        display: flex;
    `

    const Options = styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 18px;
        height: 100%;
        padding: 0px 15px;
        cursor: pointer;
        min-width: 120px;
    `

    const menu = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <Menu>
            {menu.map((text) => (
                <Options><p>{text}</p></Options>
            ))}
        </Menu>
    )
};
