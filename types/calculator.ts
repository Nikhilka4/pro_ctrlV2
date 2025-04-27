export interface CalculationResult {
  unit: "feet" | "meters";
  area: number;
  height: number;
  pricePerUnit: number;
  subTotal: number;
  gst: number;
  total: number;
}
