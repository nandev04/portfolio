import Subtitle from "../../components/Subtitle";
import CardProject from "./components/CardProject";
import easylistImg from "./assets/easylist-img.png";
import shortlyImg from "./assets/shortly-img.png";
import weatherlyImg from "./assets/weatherly-img.png";
import Carousel from "./components/Carousel";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../config/gsap.config";

const FeaturedProjects = () => {
  const wrapperCarouselRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef(null);

  useLayoutEffect(() => {
    const ctxCarousel = gsap.context(() => {
      gsap.fromTo(
        wrapperCarouselRef.current,
        { yPercent: -10, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            toggleActions: "play none none reverse",
            start: "10% 78%",
            trigger: wrapperCarouselRef.current,
            invalidateOnRefresh: true,
          },
        },
      );
    }, wrapperCarouselRef);

    return () => ctxCarousel.revert();
  }, []);

  useLayoutEffect(() => {
    const ctxSubtitle = gsap.context(() => {
      gsap.fromTo(
        subtitleRef.current,
        { xPercent: -100 },
        {
          xPercent: 0,
          scrollTrigger: {
            start: "top bottom",
            end: "top 80%",
            scrub: 1.6,
            trigger: subtitleRef.current,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => ctxSubtitle.revert();
  }, []);

  return (
    <section className="mt-40">
      <div className="max-w-490 mx-auto">
        <div className="mx-2 mb-24 sm:mx-8 md:mx-16 md:mb-24">
          <div className="ml-6.5">
            <Subtitle ref={subtitleRef}>Projects</Subtitle>
          </div>

          <div ref={wrapperCarouselRef} className="mx-auto gap-6 max-w-460">
            <Carousel
              slides={[
                <CardProject
                  title="EasyList"
                  completedAt="maio/2026"
                  postLink="https://www.linkedin.com/posts/nandev04_fullstack-nodejs-react-ugcPost-7470885765401501696-eVxJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJdEYwBuE3ldFXRah2w4aCn1_6nP_aZn2E"
                  repoLink="https://github.com/nandev04/EasyList"
                  imgSrc={easylistImg}
                  description={`Uma aplicação full stack de gerenciamento de tarefas (to-do list), construída do desenho de arquitetura ao deploy em produção. O backend foi estruturado em monólito modular com Node.js, Express, TypeScript, Zod, Prisma, PostgreSQL, Redis, Argon2 para hash de senhas e AWS S3 para armazenamento de imagens, enquanto o frontend segue arquitetura feature-based com React, TypeScript, Zustand, React Query e React Hook Form + Zod. O ambiente de desenvolvimento é containerizado com Docker e o deploy é automatizado via GitHub Actions (CI/CD). A aplicação cobre o ciclo completo de um produto real: cadastro e autenticação segura de usuários, com confirmação de conta via e-mail transacional (Resend) validada por código OTP; autenticação baseada em accessToken JWT combinado com refreshToken stateful gerenciado no Redis, aliviando a carga sobre o banco de dados; edição de dados cadastrais e alteração de senha, com upload de avatar via presigned URLs para AWS S3; CRUD completo de tarefas, com listagem paginada via infinite scroll; e rate limiting via Redis em rotas sensíveis. O projeto conta ainda com testes unitários (Vitest) e pipeline de CI/CD automatizado no GitHub Actions, cobrindo testes, type-check, lint e deploy. Ao todo, cerca de 700 commits e mais de 11.000 linhas de código, com o projeto atualmente em produção.`}
                  linkApp="easylist.app.br"
                  stack={["React", "Node.JS", "PostgreSQL", "AWS"]}
                />,
                <CardProject
                  title="Shortly"
                  completedAt="outubro/2024"
                  repoLink="https://github.com/nandev04/Shortly"
                  imgSrc={shortlyImg}
                  description={`Uma aplicação frontend em React que consome a API REST da TinyURL para encurtamento de links. A aplicação permite inserir uma URL e gerar sua versão encurtada, com opção de cópia rápida para a área de transferência e histórico de links gerados durante a sessão, visível enquanto a página permanece aberta. A persistência dos links encurtados fica a cargo da própria API da TinyURL, com o frontend consumindo os dados via requisições HTTP e tratando erros de resposta da API para lidar com falhas de comunicação ou entradas inválidas. O layout foi construído com base em um design encontrado no Dribbble.`}
                  stack={["React"]}
                />,
                <CardProject
                  title="Weatherly"
                  repoLink="https://github.com/nandev04/weather-website"
                  completedAt={"janeiro/2024"}
                  imgSrc={weatherlyImg}
                  description={`Uma aplicação em React que consulta condições climáticas em tempo real através da integração com a API pública do OpenWeather. A aplicação utiliza a Geolocation API do navegador para obter automaticamente a localização do usuário e exibir o clima local, com fallback para busca manual por cidade caso a permissão de localização seja negada. Além da condição climática atual, exibida com ícones correspondentes, a aplicação apresenta informações complementares como velocidade do vento, umidade, sensação térmica, temperaturas mínima e máxima, e pressão atmosférica. O projeto conta com estado de carregamento (loading state) durante as requisições e tratamento de erros para lidar com falhas na consulta da API ou na obtenção da localização. O layout foi construído com base em um design encontrado no Dribbble.`}
                  stack={["React"]}
                />,
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-dark-grey-900 rounded-l-2xl py-1 px-4 md:px-4  mb-70">
          <span className="-ml-30 font-quinary mix-blend-difference text-white uppercase italic text-[clamp(0.75rem,2.5vw,1rem)] font-semibold sm:font-normal">
            Mais projetos na seção pinned no GitHub
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
