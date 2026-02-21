export type Project = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  imagePath?: string;
  links: {
    github?: string;
    demo?: string;
  };
  isPublished: boolean;
  featured: boolean;
  displayOrder: number;

  // Campos para página detalhada
  status?: "Concluído" | "Em evolução";
  role?: string;
  year?: string;
  highlights?: string[];
  learnings?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "meat-house",
    title: "Meat House",
    summary:
      "Sistema web para gerenciamento de casa de carne, com foco em pedidos, categorias, produtos e otimização do atendimento.",
    description:
      "Projeto full stack com foco em fluxo de pedidos, organização de dados e experiência de uso em um cenário real de negócio. A proposta é melhorar a operação de uma casa de carne por meio de um sistema web com gerenciamento de produtos, categorias e pedidos.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    imagePath: "/projects/meat-house-cover.png",
    links: {
      github: "https://github.com/gssilva11/meat-house",
      demo: undefined,
    },
    isPublished: true,
    featured: true,
    displayOrder: 1,
    status: "Concluído",
    role: "Desenvolvimento full stack (projeto acadêmico / portfólio)",
    year: "2024",
    highlights: [
      "Estruturação de fluxo de pedidos com foco em experiência do usuário",
      "Organização de entidades como produtos, categorias e pedidos",
      "Persistência em banco relacional com Prisma + PostgreSQL",
      "Aprimoramento de feedbacks visuais e usabilidade",
    ],
    learnings: [
      "Modelagem de dados para cenários reais de negócio",
      "Integração entre front-end e back-end com foco em consistência",
      "Boas práticas de organização de código em aplicação full stack",
    ],
  },
  {
    id: 2,
    slug: "gerenciador-faixas-ip",
    title: "Gerenciador de Faixas de IP",
    summary:
      "Aplicação para gerar e organizar faixas de IP, com edição de IPs filhos, filtros e foco em usabilidade para operação.",
    description:
      "Projeto voltado para produtividade operacional em cenários de rede. Permite gerar faixas de IP, visualizar IPs derivados e organizar informações como setor e dispositivo, com foco em interface prática para uso diário.",
    tags: ["React", "Node.js", "MongoDB", "MUI"],
    imagePath: "/projects/ip-manager-cover.png",
    links: {
      github: undefined,
      demo: undefined,
    },
    isPublished: true,
    featured: true,
    displayOrder: 2,
    status: "Em evolução",
    role: "Desenvolvimento full stack (projeto de estudo aplicado)",
    year: "2025",
    highlights: [
      "Geração de faixas e visualização de IPs filhos",
      "Interface orientada a produtividade operacional",
      "Filtros para localizar IPs preenchidos/vazios",
      "Edição de metadados por IP com foco em organização",
    ],
    learnings: [
      "Pensar UX para tarefas operacionais repetitivas",
      "Modelagem de dados para estrutura hierárquica de IPs",
      "Paginação e performance em listas grandes",
    ],
  },
  {
    id: 3,
    slug: "calculadora-sub-redes",
    title: "Calculadora de Sub-redes",
    summary:
      "Projeto para cálculo de sub-redes com frontend em React e backend em Express, com objetivo de aprendizado e utilidade prática.",
    description:
      "Ferramenta de estudo e uso prático para cálculo de sub-redes, com foco em clareza na apresentação de resultados e reforço de conceitos de redes. Projeto pensado para unir utilidade técnica e prática de desenvolvimento web.",
    tags: ["React", "Express", "MongoDB"],
    imagePath: "/projects/subnet-calculator-cover.png",
    links: {
      github: undefined,
      demo: undefined,
    },
    isPublished: true,
    featured: false,
    displayOrder: 3,
    status: "Em evolução",
    role: "Desenvolvimento full stack (projeto de estudo)",
    year: "2025",
    highlights: [
      "Entrada de IP/CIDR com cálculo automatizado",
      "Exibição de resultados de rede de forma organizada",
      "Projeto voltado a aprendizado técnico e utilidade prática",
    ],
    learnings: [
      "Transformar lógica técnica em interface clara",
      "Estruturar cálculo e apresentação de dados no front-end",
      "Planejar evolução incremental de produto",
    ],
  },
];