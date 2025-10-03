import { Venda } from "../../models/vendas";

const vendas: Venda[] = [
  {
    cliente: {
      id: "1",
      nome: "Cliente 1",
      cpf: "123.456.789-00",
      dataNascimento: "1990-01-01",
      endereco: "Rua A, 123",
      email: "cliente1@user.com",
      telefone: "(11) 91234-5678",
      cadastro: "2023-10-01",
    },
    itens: [
      {
        produto: {
          id: "1",
          nome: "Produto 1",
          descricao: "Descrição do Produto 1",
          preco: 100.0,
          sku: "SKU001",
          cadastro: "2023-10-01",
        },
        quantidade: 2,
      },
      {
        produto: {
          id: "2",
          nome: "Produto 2",
          descricao: "Descrição do Produto 2",
          preco: 200.0,
          sku: "SKU002",
          cadastro: "2023-10-02",
        },
        quantidade: 2,
      },
    ],
    formaPagamento: "Cartão de Crédito",
    total: 600.0,
  },
];

export default vendas;
