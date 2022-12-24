import create from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  power: boolean;
}
interface Actions {
  togglePower: () => void;
}
interface IZuStore {
  state: State;
  actions: Actions;
}

export const useZuStore = create(
  immer<IZuStore>((set) => ({
    state: { power: false },
    actions: {
      togglePower: () => {
        set((store) => {
          store.state.power = !store.state.power;
        });
      },
    },
  }))
);
