import {
  IconBox,
  IconFiles,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

export const secoes = [
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
        url: "/gerenciar/produtos",
        icone: <IconFiles />,
      },
    ],
  },
];

export default secoes;
