export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Gabriel Santos",
  title: "Desenvolvedor em evolução",
  headline:
    "Construindo aplicações web com foco em experiência do usuário, organização de código e evolução contínua.",
  shortBio:
    "Formado em ADS (Fatec de Franca), com experiência em suporte de TI e telecom. Atualmente consolidando a transição para desenvolvimento profissional com projetos reais.",
  email: "gssilva2711@gmail.com",
  location: "Franca/SP - Brasil",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/gssilva11",
    },
    {
      label: "Email",
      href: "mailto:gssilva2711@gmail.com",
    },
  ] satisfies SocialLink[],
  skillGroups: [
    {
      title: "Front-end",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Back-end",
      items: ["Node.js", "Express", "APIs REST", "Prisma (em evolução)"],
    },
    {
      title: "Banco de dados",
      items: ["PostgreSQL", "MongoDB", "Modelagem relacional (em evolução)"],
    },
    {
      title: "Ferramentas",
      items: ["Git", "GitHub", "Vercel", "Figma (leitura de layout)"],
    },
  ] satisfies SkillGroup[],
};