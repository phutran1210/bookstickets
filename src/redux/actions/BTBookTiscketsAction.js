import { CHON_GHE, HUY_GHE, DAT_GHE } from "./types/BTBookTicketsType";

export const chonGheAction = (dsGhe) => {
  return {
    type: CHON_GHE,
    dsGhe: dsGhe,
  };
};

export const huyGheAction = (ghe) => {
  return {
    type: HUY_GHE,
    ghe: ghe,
  };
};

export const datGheAction = () => {
  return {
    type: DAT_GHE,
  };
};
