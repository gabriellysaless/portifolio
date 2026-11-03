import Card from './components/Card';
import Header from './components/Header';
import Section from './components/Section';
import logoEscura from './assets/logo-escura.jpg';
import styles from './App.module.css';

function App() {
  
  return (
    <>
      <Header/>
      <Section id={"sobre"} title={"Sobre mim"}> 
        <p>Sobre mim</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint a, omnis explicabo repudiandae accusamus ullam eius natus esse unde ad quam consequatur perspiciatis eligendi, modi ipsa ratione odio?</p>
      </Section>
      <Section id={"projetos"} title={"Meus Projetos"}> 
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
    </>
  )
}

export default App
