export interface Data {
  time: string;
  EC_slab1: number;
  EC_slab2: number;
  EC_drain_PC: number;
  WC_slab1: number;
  WC_slab2: number;
  CO2air: number;
  HumDef: number;
  Rhair: number;
  Tair: number;
  EnScr: number;
  BlackScr: number;
  PipeGrow: number;
  PipeLow: number;
  Iglob: number;
  RadSum: number;
  Tout: number;
}

export interface ITab {
  isActive: boolean;
}
