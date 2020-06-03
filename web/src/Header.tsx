import React from 'react';

//Usamos o interace para passar parametros no FC
interface HeaderProps {
    title: string;
}

//Usamos o FC pois ele nos permite passar parametros
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;