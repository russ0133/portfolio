import create from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  isFirstRun: boolean;
  isPowerOn: boolean;
  isUIOpen: boolean;
  isModelLoaded: boolean;
}
interface Actions {
  togglePower: () => void;
  toggleUI: (value: boolean) => void;
  setModelLoaded: () => void;
  setIsFirstRun: (value: boolean) => void;
}
interface IZuStore {
  state: State;
  actions: Actions;
}

export const useZuStore = create(
  immer<IZuStore>((set) => ({
    state: { isPowerOn: false, isModelLoaded: false, isUIOpen: false, isFirstRun: true },
    actions: {
      toggleUI: (value) => {
        set((store) => {
          store.state.isUIOpen = value;
        });
      },
      togglePower: () => {
        set((store) => {
          store.state.isPowerOn = !store.state.isPowerOn;
        });
      },
      setModelLoaded: () => {
        set((store) => {
          store.state.isModelLoaded = true;
        });
      },
      setIsFirstRun: (value) => {
        set((store) => {
          store.state.isFirstRun = value;
        });
      },
    },
  }))
);
