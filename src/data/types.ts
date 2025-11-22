export type BossType = "day1" | "day2" | "day3";

export interface Boss {
  id: string;
  name: string;
  type: BossType;
  imageUrl?: string;
}

export interface Route {
  day1Id: string;
  day2Id: string;
  day3Id: string; // The result
}
