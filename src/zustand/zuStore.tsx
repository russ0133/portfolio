import create from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  power: boolean;
  uiOpen: boolean;
  modelLoaded: boolean;
}
interface Actions {
  togglePower: () => void;
  toggleUI: (value: boolean) => void;
  setModelLoaded: () => void;
}
interface IZuStore {
  state: State;
  actions: Actions;
}

export const useZuStore = create(
  immer<IZuStore>((set) => ({
    state: { power: false, modelLoaded: false, uiOpen: false },
    actions: {
      toggleUI: (value) => {
        set((store) => {
          store.state.uiOpen = value;
        });
      },
      togglePower: () => {
        set((store) => {
          store.state.power = !store.state.power;
        });
      },
      setModelLoaded: () => {
        set((store) => {
          store.state.modelLoaded = true;
        });
      },
    },
  }))
);
