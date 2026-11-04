import styles from './App.module.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Card from './components/Card';
import Header from './components/Header';
import Section from './components/Section';
import SkillTag from './components/SkillTag';
import Form from './components/Form';
import IconButton from './components/IconButton/IconButton';

import aNoticia from './assets/a-noticia.png';
import cinelista from './assets/cinelista.png';
import cardapio from './assets/cardapio.png';
import reactImg from './assets/react.svg';
import nextImg from './assets/next.svg';
import javaImg from './assets/javascript.svg';
import typeImg from './assets/typescript.svg';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import ProjetoDetalhes from './pages/ProjetoDetalhes/ProjetoDetalhes';

function Home() {
  
  return (
    <>
      <Section id={"sobre"} title={"Sobre mim"}> 
        <p>Sobre mim</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint a, omnis explicabo repudiandae accusamus ullam eius natus esse unde ad quam consequatur perspiciatis eligendi, modi ipsa ratione odio?</p>
      </Section>

      <Section id={"projetos"} title={"Meus Projetos"} variant={"projetos"}> 
        <div className={styles.projetosContainer}>
          <Card imagem={cinelista} title={"Cinelista"} id={"cinelista"}>
            <p>Aplicação web para explorar filmes, desenvolvida com Next.js e integração com a API TMDB.</p>
          </Card>
          <Card imagem={aNoticia} title={"A Notícia"} id={"blog-a-noticia"}>
            <p>Portal de notícias desenvolvido com Next.js, com categorias, rotas dinâmicas, SEO e pipeline CI/CD.</p>
          </Card>
          <Card imagem={cardapio} title={"Cardápio Micro FrontEnd"} id={"cardapio-micro-frontend"}>
            <p>Aplicação de cardápio digital com arquitetura Micro Frontends, Module Federation e comunicação entre aplicações.</p>
          </Card>
        </div>
      </Section>

      <Section id={"habilidades"} title={"Minhas Competências"}>
        <div className={styles.skillsContainer}>
          <SkillTag imagem={reactImg} name={"React"}/>
          <SkillTag imagem={nextImg} name={"Next"}/>
          <SkillTag imagem={javaImg} name={"JavaScript"}/>
          <SkillTag imagem={typeImg} name={"TypeScript"}/>
        </div>
      </Section>

      <Section id={"contato"} title={"Vamos Conversar?"} variant={"contato"}>
        <p>Entre em contato pelo formulário abaixo ou me contate pelas redes sociais!</p>
        <div className={styles.contatoContainer}>
          <Form></Form>
          <div>
            <h3>CONTATO:</h3>
            <div className={styles.redesContainer}>
              <IconButton icon={<FaLinkedin />} link={"https://www.linkedin.com/in/gabrielly-de-oliveira-sales-almeida-71ab2424a/"}/>
              <IconButton icon={<FaGithub />} link={"https://github.com/gabriellysaless"}/>
            </div>
            <span><IoMdPin /> Ouro Branco, MG</span>
          </div>
        </div>
      </Section>
    </>
  )
}

export default function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projeto/:id" element={<ProjetoDetalhes/>}/>
      </Routes>
    </BrowserRouter>
  )
}
