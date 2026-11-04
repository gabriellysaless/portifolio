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
        <div className={styles.contatoContainer}>
          <p>Entre em contato pelo formulário abaixo ou me contate pelas redes sociais!</p>
          <Form></Form>
        </div>
      </Section>
    </>
  )
}

export default App
