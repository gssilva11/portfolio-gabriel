export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string; // futuro: screenshot real
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Meat House",
    description:
      "Sistema web para gerenciamento de casa de carne, com foco em pedidos, categorias, produtos e otimização do atendimento.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/gssilva11/meat-house",
    demoUrl: undefined,
  },
  {
    id: 2,
    title: "Gerenciador de Faixas de IP",
    description:
      "Aplicação para gerar e organizar faixas de IP, com edição de IPs filhos, filtros e foco em usabilidade para operação.",
    tags: ["React", "Node.js", "MongoDB", "MUI"],
    githubUrl: undefined,
    demoUrl: undefined,
  },
  {
    id: 3,
    title: "Calculadora de Sub-redes",
    description:
      "Projeto para cálculo de sub-redes com frontend em React e backend em Express, com objetivo de aprendizado e utilidade prática.",
    tags: ["React", "Express", "MongoDB"],
    githubUrl: undefined,
    demoUrl: undefined,
  },
];