export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
