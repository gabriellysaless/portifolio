import { useParams, Link } from 'react-router-dom';
import styles from './ProjetoDetalhes.module.css';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

// Simulação de um banco de dados local com os projetos
const projetosDados = {
    "cinelista": {
        title: "CineLista",
        descricao: "O CineLista é uma aplicação web desenvolvida com Next.js que permite aos usuários explorar e descobrir filmes por meio da integração com a API do The Movie Database (TMDB). O projeto foi desenvolvido com foco na aplicação de conceitos modernos do desenvolvimento front-end, incluindo consumo de APIs externas, gerenciamento de dados, organização de componentes e estruturação de páginas utilizando o App Router do Next.js. A aplicação apresenta informações sobre filmes de forma organizada, proporcionando uma experiência intuitiva de navegação e consulta. Durante o desenvolvimento, foram trabalhados conceitos de componentização, reutilização de código, renderização e integração com serviços externos.",
        github: "https://github.com/gabriellysaless/cinelista",
        vercel: "https://cinelista-psi.vercel.app/"
    },

    "blog-a-noticia": {
        title: "A Notícia",
        descricao: "O A Notícia é um projeto de blog desenvolvido com Next.js utilizando a arquitetura App Router, com o objetivo de simular a estrutura e o funcionamento de um portal de notícias. A aplicação organiza artigos por categorias e permite a navegação entre diferentes páginas por meio de rotas dinâmicas, proporcionando uma estrutura semelhante à de plataformas profissionais de conteúdo. O projeto utiliza Server Components e Data Fetching para trabalhar com a obtenção e exibição de informações, além de implementar metadados dinâmicos e boas práticas de SEO para melhorar a indexação das páginas nos mecanismos de busca. Também foram aplicados conceitos de organização de código, componentização e estilização. Como parte da estrutura de qualidade e entrega, o projeto conta com um pipeline de CI/CD utilizando GitHub Actions, com etapas automatizadas de build, testes e deploy na Vercel.",
        github: "https://github.com/gabriellysaless/blog",
        vercel: "https://blog-inky-nine-91.vercel.app"
    },

    "cardapio-micro-frontend": {
        title: "Cardápio Micro Frontend",
        descricao: "O Cardápio Micro Frontend é uma aplicação desenvolvida com Next.js que explora a arquitetura de Micro Frontends, permitindo dividir uma aplicação em partes menores, independentes e especializadas. O projeto é estruturado em três aplicações: Container, responsável pela aplicação principal e integração dos módulos; Micro Cardápio, responsável pela apresentação dos produtos disponíveis; e Micro Pedido, responsável pelo gerenciamento dos produtos adicionados ao pedido. A comunicação entre os módulos é realizada por meio de eventos personalizados do JavaScript (Custom Events), permitindo que diferentes aplicações compartilhem informações e interajam entre si. Para implementar a arquitetura, foi utilizado o Module Federation, possibilitando a exposição e o consumo de componentes entre aplicações independentes. O projeto explora conceitos importantes de arquitetura de software, modularização, integração entre aplicações, reutilização de componentes e comunicação entre módulos, aproximando o desenvolvimento de uma estrutura utilizada em sistemas de maior escala.",
        github: "https://github.com/gabriellysaless/cardapio-micro-frontend",
        vercel: null
    }
};

export default function ProjetoDetalhes() {
    const { id } = useParams(); // Pega o id da URL (ex: 'blog')
    const projeto = projetosDados[id]; // Busca os dados do projeto correspondente

    if (!projeto) {
        return (
            <div className={styles.erro}>
                <h2>Projeto não encontrado!</h2>
                <Link to="/" className={styles.voltarLink}><FaArrowLeft /> Voltar para a Home</Link>
            </div>
        );
    }

    return (
        <main className={styles.detalhesContainer}>
            <Link to="/" className={styles.voltarLink}>
                <FaArrowLeft /> Voltar para Home
            </Link>

            <h1>{projeto.title}</h1>
            <p className={styles.detalhesContainer__descricao}>{projeto.descricao}</p>

            <div className={styles.detalhesContainer__links}>
                {projeto.github && (
                    <a href={projeto.github} target="_blank" rel="noopener noreferrer" className={styles.botaoLink}>
                        <FaGithub /> Repositório no GitHub
                    </a>
                )}

                {projeto.vercel && (
                    <a href={projeto.vercel} target="_blank" rel="noopener noreferrer" className={styles.botaoLink}>
                        <FaExternalLinkAlt /> Ver Projeto Live (Vercel)
                    </a>
                )}
            </div>
        </main>
    );
}