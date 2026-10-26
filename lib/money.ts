import Decimal from "decimal.js";

export function money(value: Decimal.Value) {
  return new Decimal(value);
}

export function formatKES(value: Decimal.Value) {
  return `KSh ${new Decimal(value).toDecimalPlaces(0).toNumber().toLocaleString("en-KE")}`;
}
