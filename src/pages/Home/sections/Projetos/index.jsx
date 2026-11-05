import Section from '../../../../components/Section';
import Card from '../../../../components/Card';
import styles from './Projetos.module.css';
import aNoticia from '../../../../assets/a-noticia.png';
import cinelista from '../../../../assets/cinelista.png';
import cardapio from '../../../../assets/cardapio.png';

export default function Projetos() {
    return(
        <Section id={"projetos"} title={"Meus Projetos"} variant={"projetos"}> 
            <div className={styles.projetos}>
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
    )
}
