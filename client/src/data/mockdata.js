export const raceInfo = {
  name: "Italian Grand Prix",
  circuit: "Monza",
  lap: 38,
  totalLaps: 53,
  status: "GREEN FLAG",
  temperature: 24,
  trackTemperature: 39,
  weather: "Clear",
};

export const drivers = [
  {
    position: 1,
    code: "VER",
    name: "Max Verstappen",
    team: "Red Bull Racing",
    gap: "LEADER",
    lastLap: "1:23.421",
    tyre: "MEDIUM",
    tyreAge: 12,
  },
  {
    position: 2,
    code: "NOR",
    name: "Lando Norris",
    team: "McLaren",
    gap: "+1.842",
    lastLap: "1:23.512",
    tyre: "MEDIUM",
    tyreAge: 11,
  },
  {
    position: 3,
    code: "LEC",
    name: "Charles Leclerc",
    team: "Ferrari",
    gap: "+4.217",
    lastLap: "1:23.687",
    tyre: "HARD",
    tyreAge: 24,
  },
  {
    position: 4,
    code: "PIA",
    name: "Oscar Piastri",
    team: "McLaren",
    gap: "+5.104",
    lastLap: "1:23.601",
    tyre: "MEDIUM",
    tyreAge: 10,
  },
  {
    position: 5,
    code: "SAI",
    name: "Carlos Sainz",
    team: "Ferrari",
    gap: "+8.321",
    lastLap: "1:23.944",
    tyre: "HARD",
    tyreAge: 23,
  },
  {
    position: 6,
    code: "HAM",
    name: "Lewis Hamilton",
    team: "Mercedes",
    gap: "+10.482",
    lastLap: "1:23.821",
    tyre: "SOFT",
    tyreAge: 6,
  },
  {
    position: 7,
    code: "RUS",
    name: "George Russell",
    team: "Mercedes",
    gap: "+12.904",
    lastLap: "1:24.012",
    tyre: "MEDIUM",
    tyreAge: 15,
  },
  {
    position: 8,
    code: "ALO",
    name: "Fernando Alonso",
    team: "Aston Martin",
    gap: "+18.321",
    lastLap: "1:24.214",
    tyre: "HARD",
    tyreAge: 28,
  },
  {
    position: 9,
    code: "GAS",
    name: "Pierre Gasly",
    team: "Alpine",
    gap: "+21.842",
    lastLap: "1:24.331",
    tyre: "MEDIUM",
    tyreAge: 14,
  },
  {
    position: 10,
    code: "TSU",
    name: "Yuki Tsunoda",
    team: "RB",
    gap: "+24.102",
    lastLap: "1:24.287",
    tyre: "SOFT",
    tyreAge: 7,
  },
];

export const selectedDriver = {
  ...drivers[1],
  s1: 33.0,
  s2: 32.361,
  s3: 31.555,
};

export const strategy = [
  {
    code: "VER",
    stints: [
      { tyre: "SOFT", laps: 14 },
      { tyre: "MEDIUM", laps: 27 },
    ],
  },
  {
    code: "NOR",
    stints: [
      { tyre: "MEDIUM", laps: 16 },
      { tyre: "MEDIUM", laps: 22 },
    ],
  },
  {
    code: "LEC",
    stints: [
      { tyre: "SOFT", laps: 10 },
      { tyre: "HARD", laps: 28 },
    ],
  },
  {
    code: "PIA",
    stints: [
      { tyre: "MEDIUM", laps: 18 },
      { tyre: "MEDIUM", laps: 20 },
    ],
  },
];

export const raceEvents = [
  {
    lap: 38,
    type: "OVERTAKE",
    message: "Norris passes Leclerc for P2",
  },
  {
    lap: 37,
    type: "PIT STOP",
    message: "Hamilton pits for soft tyres",
  },
  {
    lap: 35,
    type: "FASTEST LAP",
    message: "Verstappen sets fastest lap",
  },
  {
    lap: 32,
    type: "YELLOW FLAG",
    message: "Yellow flag in Sector 2",
  },
];

export const cars = [
  { code: "VER", x: 30, y: 40 },
  { code: "NOR", x: 60, y: 25 },
  { code: "LEC", x: 45, y: 70 },
];
