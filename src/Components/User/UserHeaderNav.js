import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  const activeStyle = {
    background: '#fff',
    boxShadow: '0 0 0 3px #fea',
    borderColor: '#fb1',
    outline: 'none',
  };

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/conta"
        end
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink
        to="/conta/estatisticas"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink
        to="/conta/postar"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
