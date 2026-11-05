import aNoticia from '../../../assets/a-noticia.png';
import cinelista from '../../../assets/cinelista.png';
import cardapio from '../../../assets/cardapio.png';

const projetos = [
    {
        id: "cinelista",
        title: "Cinelista",
        imagem: cinelista,
        descricao: "Aplicação web para explorar filmes, desenvolvida com Next.js e integração com a API TMDB."
    },
    {
        id: "blog-a-noticia",
        title: "A Notícia",
        imagem: aNoticia,
        descricao: "Portal de notícias desenvolvido com Next.js, com categorias, rotas dinâmicas, SEO e pipeline CI/CD."
    },
    {
        id: "cardapio-micro-frontend",
        title: "Cardápio Micro FrontEnd",
        imagem: cardapio,
        descricao: "Aplicação de cardápio digital com arquitetura Micro Frontends, Module Federation e comunicação entre aplicações."
    },
];

export default projetos;