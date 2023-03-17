const sum1 = 100200200;
const sum2 = 10020020;

const toEuro = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "EUR",
  currencyDisplay: "symbol",
  // useGrouping: false,
  minimumFractionDigits: 0,
});

console.log(toEuro.format(sum2));

// document.getElementById("app").innerHTML = `
// <h1>JS NumberFormat</h1>
// <div>
//   ${sum.toLocaleString("ru", {
//     style: "currency",
//     currency: "EUR",
//     currencyDisplay: "name",
//     // useGrouping: false,
//     minimumFractionDigits: 0,
//   })}
//   <br />
//   ${toEuro.format(sum)}
// </div>
// `;
