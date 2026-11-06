import Section from '../../../../components/Section';
import styles from './Sobre.module.css';
import perfil from '../../../../assets/perfil.jpg'

export default function Sobre() {
    return(
        <Section id={"sobre"} title={"Olá, sou a Gabrielly"}> 
            <div className={styles.sobre}>
                <div className={styles.sobre__imagem}>
                    <img src={perfil} alt="Foto de perfil" />
                </div>
                <div className={styles.sobre__texto}>
                    <p>
                        Desenvolvedora Front-End em transição de carreira, vinda da área de Eletrotécnica. Encontrei na programação a união perfeita entre lógica e criação visual, e hoje me dedico a construir interfaces modernas, acessíveis e eficientes.
                    </p>
                    <h3>Minha Trajetória</h3>
                    <p>
                        Minha base técnica começou na Eletrotécnica. Foi lá que desenvolvi o gosto pela análise de problemas e estruturas. Ao ter contato com programação, decidi migrar para essa área. Atualmente, busco minha formação profissionalizante Full Stack pela EBAC, no momento concluí o Front-End e me preparo para expandir os estudos no Back-End.
                    </p>
                    <p>
                        Fique à vontade para explorar meu portfólio e conferir alguns dos projetos que desenvolvi durante essa jornada!
                    </p>
                </div>
            </div>
        </Section>
    )
}