import Section from '../../../../components/Section';
import SkillTag from '../../../../components/SkillTag';

import reactImg from '../../../../assets/react.svg';
import nextImg from '../../../../assets/next.svg';
import javaImg from '../../../../assets/javascript.svg';
import typeImg from '../../../../assets/typescript.svg';

import styles from './Habilidades.module.css';


export default function Habilidades() {
    return(
        <Section id={"habilidades"} title={"Minhas Competências"}>
            <div className={styles.habilidades}>
                <SkillTag imagem={reactImg} name={"React"}/>
                <SkillTag imagem={nextImg} name={"Next"}/>
                <SkillTag imagem={javaImg} name={"JavaScript"}/>
                <SkillTag imagem={typeImg} name={"TypeScript"}/>
            </div>
      </Section>
    )
}