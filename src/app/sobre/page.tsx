import { Metadata } from 'next'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: siteConfig.description,
  alternates: {
    canonical: '/sobre'
  }
}

export default async function AboutPage() {
  return (
    <section className="container max-w-3xl mx-auto py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Sobre mim
          </h1>
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground">
          Olá! Sou Randys, goiano
          <span className="italic"> (do pé rachado)</span>, nascido e criado nas
          terras quentes de Porangatu. Desde cedo, desenvolvi uma paixão pela
          tecnologia que moldou meu percurso profissional e pessoal.
        </p>
        <p className="text-muted-foreground">
          Aos 18 anos, comecei meus primeiros passos no mundo da Tecnologia da
          Informação (T.I), mergulhando na manutenção de computadores e no
          suporte a softwares de automação comercial. Esses primeiros desafios
          me ensinaram valiosas lições e solidificaram minha base na área.
        </p>
        <p className="text-muted-foreground">
          Com o tempo, minha jornada me conduziu ao fascinante universo do
          desenvolvimento web. Há mais de seis anos, tenho o privilégio de
          trabalhar nesse campo dinâmico e emocionante. Iniciei minha carreira
          como freelancer, colaborando com empresas locais, e hoje, presto
          serviços para duas grandes empresas, mergulhando em projetos
          desafiadores e recompensadores.
        </p>
        <p className="text-muted-foreground">
          Atualmente, atuo como desenvolvedor Front-end, explorando as
          tecnologias mais demandadas do mercado, como{' '}
          <span className="font-bold text-primary">ReactJS</span> e{' '}
          <span className="font-bold text-primary">NextJS</span>. Tenho
          experiência significativa com{' '}
          <span className="font-bold text-primary">WordPress</span>,
          participando e até mesmo liderando diversos projetos sendo alguns
          deles com a abordagem{' '}
          <span className="font-bold text-primary">Headless</span>.
          Paralelamente, estou dedicando tempo ao aprimoramento das minhas
          habilidades de Back-end, mergulhando nos estudos de{' '}
          <span className="font-bold text-primary">NodeJS</span>,{' '}
          <span className="font-bold text-primary">PHP</span> e{' '}
          <span className="font-bold text-primary">Laravel</span> para ampliar
          ainda mais meu leque de conhecimentos e possibilidades profissionais.
        </p>
        <p className="text-muted-foreground">
          Além da experiência prática, também busquei aprimorar minha formação
          acadêmica. Sou graduado em
          <span className="font-bold text-primary">
            {' '}
            Sistemas de Informação
          </span>{' '}
          pela <span className="font-bold text-primary">UEG</span>, uma jornada
          que complementou minhas habilidades técnicas com uma base sólida em
          teoria e prática.
        </p>
        <p className="text-muted-foreground">
          Neste espaço, pretendo compartilhar minhas experiências, aprendizados
          e reflexões sobre o mundo da tecnologia, desenvolvimento web e muito
          mais. Seja você um entusiasta da T.I, um profissional em ascensão ou
          simplesmente alguém curioso, espero que encontre inspiração e
          conhecimento aqui.
        </p>
        <p className="text-muted-foreground">
          Obrigado por me acompanhar nesta jornada!
        </p>
        <p className="text-muted-foreground">Saudações,</p>
        <p className="text-muted-foreground text-gray-400">
          <span className="text-primary">Randys</span> 🤘
        </p>
      </div>
    </section>
  )
}
