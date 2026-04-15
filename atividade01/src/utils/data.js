export const flatListSampleData = Array.from({ length: 16 }).map((_, i) => ({
  id: String(i + 1),
  title: `Item ${i + 1}`,
  subtitle: `Linha ${i + 1} — FlatList virtualiza o que está fora da tela.`,
}));

export const sectionListSampleData = [
  { title: "Grupo A", data: ["Item A1", "Item A2"] },
  { title: "Grupo B", data: ["Item B1", "Item B2", "Item B3"] },
];

export const scrollViewBlocks = [
  {
    id: "b1",
    title: "ScrollView",
    text: "Envolve o conteúdo e permite rolar quando ele passa da altura da tela.",
  },
  {
    id: "b2",
    title: "Exemplo",
    text: "Role para baixo para ver mais caixas de texto.",
  },
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `b${i + 3}`,
    title: `Bloco ${i + 1}`,
    text: "Texto extra só para gerar rolagem.",
  })),
];
