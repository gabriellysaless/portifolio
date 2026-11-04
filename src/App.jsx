import styles from './App.module.css';

import Card from './components/Card';
import Header from './components/Header';
import Section from './components/Section';
import SkillTag from './components/SkillTag';
import Form from './components/Form';

import logoEscura from './assets/logo-escura.jpg';
import reactImg from './assets/react.svg';
import nextImg from './assets/next.svg';
import javaImg from './assets/javascript.svg';
import typeImg from './assets/typescript.svg';
import IconButton from './components/IconButton/IconButton';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

function App() {
  
  return (
    <>
      <Header/>

      <Section id={"sobre"} title={"Sobre mim"}> 
        <p>Sobre mim</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint a, omnis explicabo repudiandae accusamus ullam eius natus esse unde ad quam consequatur perspiciatis eligendi, modi ipsa ratione odio?</p>
      </Section>

      <Section id={"projetos"} title={"Meus Projetos"} variant={"projetos"}> 
        <div className={styles.projetosContainer}>
          <Card imagem={logoEscura} title={"Blog"}>
            <p>teste</p>
          </Card>
          <Card imagem={logoEscura} title={"Lista de Tarefas"}>
            <p>teste</p>
          </Card>
          <Card imagem={logoEscura} title={"PokeNext"}>
            <p>teste</p>
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

export default App
