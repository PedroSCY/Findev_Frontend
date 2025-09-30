import {
  IconBox,
  IconFiles,
  IconGraph,
  IconHome,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

export const secoes = [
  {
    titulo: "MenuItem",
    aberta: true,
    itens: [
      {
        titulo: "Inicio",
        url: "/home",
        icone: <IconHome />,
      },
      {
        titulo: "Dashboard",
        url: "/dashboard",
        icone: <IconGraph />,
      },
    ],
  },
  {
    titulo: "Gerenciar",
    aberta: true,
    itens: [
      {
        titulo: "Produtos",
        url: "/gerenciar/produtos",
        icone: <IconBox />,
      },
      {
        titulo: "Clientes",
        url: "/gerenciar/clientes",
        icone: <IconUsers />,
      },
      {
        titulo: "Vendas",
        url: "/gerenciar/vendas",
        icone: <IconShoppingCart />,
      },
    ],
  },
  {
    titulo: "Relatorios",
    aberta: false,
    itens: [
      {
        titulo: "Obter Relatorio",
        url: "/relatorios/obterrelatorio",
        icone: <IconFiles />,
      },
    ],
  },
];

export default secoes;
