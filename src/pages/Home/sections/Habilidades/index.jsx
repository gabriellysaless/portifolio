import Section from '../../../../components/Section';
import SkillTag from '../../../../components/SkillTag';

import habilidades from '../../data/habilidades.js';

import styles from './Habilidades.module.css';


export default function Habilidades() {
    return(
        <Section id={"habilidades"} title={"Minhas Competências"}>
            <div className={styles.habilidades}>
                {habilidades.map((habilidade) => (
                    <SkillTag
                    key={habilidade.name}
                        imagem={habilidade.imagem}
                        name={habilidade.name}
                    />
                ))}
            </div>
      </Section>
    )
}