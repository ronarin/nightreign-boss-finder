import type { Route } from "./types";

export const routes: Route[] = [
  // Margit routes
  { day1Id: "d1_margit", day2Id: "d2_rennala", day3Id: "d3_malenia" },
  { day1Id: "d1_margit", day2Id: "d2_rykard", day3Id: "d3_radagon" },

  // Godrick routes
  { day1Id: "d1_godrick", day2Id: "d2_rennala", day3Id: "d3_eldenbeast" },
  { day1Id: "d1_godrick", day2Id: "d2_morgott", day3Id: "d3_malenia" },

  // Radahn routes
  { day1Id: "d1_radahn", day2Id: "d2_rykard", day3Id: "d3_eldenbeast" },
  { day1Id: "d1_radahn", day2Id: "d2_morgott", day3Id: "d3_radagon" },
];
