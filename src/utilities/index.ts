export const priceMask = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, item) => acc + item.prices.current!, 0);
};
