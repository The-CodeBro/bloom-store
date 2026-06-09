export function formatCurrency(priceCents) {
  // return (Math.round(priceCents) / 100).toFixed(2);

  const kobo = priceCents * 500; // convert USD cents to kobo at ₦1000/$1

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(kobo / 100);
}

export default formatCurrency;
