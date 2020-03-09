import React from 'react';

const Header = () =>{
    return(
    <nav>
    <div class="nav-wrapper indigo lighten-2">
      <a href="#" class="brand-logo">Parceiros</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/cadastro">Cadastro</a></li>
        <li><a href="/parceiros">Parceiros</a></li>
        <li><a href="/sobre">Sobre</a></li>
      </ul>
    </div>
  </nav>
   );
}

export default Header;