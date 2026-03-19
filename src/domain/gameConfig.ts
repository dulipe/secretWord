export type GameOption = {
  label: string;
  value: number;
};

export const GAME_OPTIONS: GameOption[] = [
  { label: "5 Letras", value: 5 },
  { label: "6 Letras", value: 6 },
  { label: "7 Letras", value: 7 },
  { label: "8 Letras", value: 8 },
  { label: "9 Letras", value: 9 },
  { label: "10 Letras", value: 10 },
];

export const MAX_ATTEMPTS = 7;

export const KEYBOARD_LAYOUT: string[][] = [
  [..."QWERTYUIOP"],
  [..."ASDFGHJKL"],
  [..."ZXCVBNM"],
];

export const ALPHABET: string[] = [..."QWERTYUIOPASDFGHJKLZXCVBNM"];