export type Project = {
  id: number;
  slug: string; // futuro: /projetos/[slug]
  title: string;
  summary: string; // texto curto para o card
  description: string; // texto um pouco mais detalhado (futuro)
  tags: string[];
  imagePath?: string; // /public/projects/arquivo.png
  links: {
    github?: string;
    demo?: string;
  };
  isPublished: boolean;
  featured: boolean;
  displayOrder: number;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "meat-house",
    title: "Meat House",
    summary:
      "Sistema web para gerenciamento de casa de carne, com foco em pedidos, categorias, produtos e otimização do atendimento.",
    description:
      "Projeto full stack com foco em fluxo de pedidos, organização de dados e experiência de uso em um cenário real de negócio.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    imagePath: "/projects/meat-house-cover.png", // adicione depois em public/projects
    links: {
      github: "https://github.com/gssilva11/meat-house",
      demo: undefined,
    },
    isPublished: true,
    featured: true,
    displayOrder: 1,
  },
  {
    id: 2,
    slug: "gerenciador-faixas-ip",
    title: "Gerenciador de Faixas de IP",
    summary:
      "Aplicação para gerar e organizar faixas de IP, com edição de IPs filhos, filtros e foco em usabilidade para operação.",
    description:
      "Projeto voltado para produtividade operacional, com interface de gerenciamento e organização de IPs em cenários de rede.",
    tags: ["React", "Node.js", "MongoDB", "MUI"],
    imagePath: "/projects/ip-manager-cover.png",
    links: {
      github: undefined,
      demo: undefined,
    },
    isPublished: true,
    featured: true,
    displayOrder: 2,
  },
  {
    id: 3,
    slug: "calculadora-sub-redes",
    title: "Calculadora de Sub-redes",
    summary:
      "Projeto para cálculo de sub-redes com frontend em React e backend em Express, com objetivo de aprendizado e utilidade prática.",
    description:
      "Ferramenta de estudo e uso prático para cálculo de sub-redes, com foco em lógica de redes e apresentação clara de resultados.",
    tags: ["React", "Express", "MongoDB"],
    imagePath: "/projects/subnet-calculator-cover.png",
    links: {
      github: undefined,
      demo: undefined,
    },
    isPublished: true,
    featured: false,
    displayOrder: 3,
  },
];