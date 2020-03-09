import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const Header = () =>{
    return(
    <nav>
    <div className="nav-wrapper indigo lighten-2">
    <LinkWrapper to="/" className="brand-logo">Parceiros</LinkWrapper>
      <ul class="right hide-on-med-and-down">
        <li><LinkWrapper  to='/cadastro'>Cadastro</LinkWrapper></li>
        <li><LinkWrapper  to='/parceiros'>Parceiros</LinkWrapper></li>
        <li><LinkWrapper  to='/sobre'>Sobre</LinkWrapper></li>
      </ul>
    </div>
  </nav>
   );
}

export default Header;