import Section from '../../../../components/Section';
import Card from '../../../../components/Card';
import styles from './Projetos.module.css';

import projetos from '../../data/projetos.js';

export default function Projetos() {
    return(
        <Section id={"projetos"} title={"Meus Projetos"} variant={"projetos"}> 
            <div className={styles.projetos}>
                {projetos.map((projeto) => ( // usar () no map é o mesmo que colocar o Card dentro do return
                    <Card
                        key={projeto.id}
                        imagem={projeto.imagem}
                        title={projeto.title}
                        id={projeto.id}
                    >
                        <p>{projeto.descricao}</p>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
