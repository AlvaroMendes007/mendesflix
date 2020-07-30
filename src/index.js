import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Gif from '../src/assets/img/404.gif';
// import styled from 'styled-components';

// const Error = styled.error`
//   text-align: 'center';
// `;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <div>
    {/* <Error> */}
      <img src={Gif} alt='404'/> 
      <h1>Error 404</h1>
    {/* </Error> */}
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
