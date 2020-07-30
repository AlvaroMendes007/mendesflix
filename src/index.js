import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Gif from '../src/assets/img/404.gif';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageDefault from './components/PageDefault';
import styled from 'styled-components';

const Error404 = styled.div`
  color: red;
  text-align: center;
`

const Pagina404 = () => (
  <PageDefault>
    <Error404>
      <div>
        <img src={Gif} alt='404'/> 
        <h1>Error 404</h1>
      </div>
    </Error404>
  </PageDefault>
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
