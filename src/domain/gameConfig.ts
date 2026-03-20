export type GameOption = {
  value: number;
};

export const GAME_OPTIONS: GameOption[] = [
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
];

export const MAX_ATTEMPTS = 7;

export const KEYBOARD_LAYOUT: string[][] = [
  [..."QWERTYUIOP"],
  [..."ASDFGHJKL"],
  [..."ZXCVBNM"],
];

export const ALPHABET: string[] = [..."QWERTYUIOPASDFGHJKLZXCVBNM"];