export const productSchema = {
  type: "object",

  properties: {
    quantidade: {
      type: "number",
    },

    produtos: {
      type: "array",

      items: {
        type: "object",

        properties: {
          nome: { type: "string" },

          preco: { type: "number" },

          descricao: { type: "string" },

          quantidade: { type: "number" },
        },

        required: ["nome", "preco", "descricao", "quantidade"],
      },
    },
  },

  required: ["quantidade", "produtos"],
};
