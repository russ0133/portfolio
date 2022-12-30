import create from "zustand";
import { immer } from "zustand/middleware/immer";

interface IConsole {
  isFirstRun: boolean;
  isModelLoaded: boolean;
  isPowerOn: boolean;
  isViewingContent: boolean;
  selectedOption: number;
  shouldReturnToPosition: boolean;
}

interface State {
  isUIOpen: boolean;
  console: IConsole;
}

interface Actions {
  togglePower: () => void;
  setModelLoaded: () => void;
  setUIOpen: (value: boolean) => void;
  setIsFirstRun: (value: boolean) => void;
  setIsViewingContent: (value: boolean) => void;
  setShouldReturnToPosition: (value: boolean) => void;
  setSelectedOption: (number: number) => void;
}

interface IZuStore {
  state: State;
  actions: Actions;
}

export const useZuStore = create(
  immer<IZuStore>((set) => ({
    state: {
      console: {
        isPowerOn: false,
        isModelLoaded: false,
        isFirstRun: true,
        isViewingContent: false,
        selectedOption: 0,
        shouldReturnToPosition: false,
      },
      isUIOpen: false,
    },
    actions: {
      setUIOpen: (value) => {
        set((store) => {
          store.state.isUIOpen = value;
        });
      },
      togglePower: () => {
        set((store) => {
          store.state.console.isPowerOn = !store.state.console.isPowerOn;
        });
        console.log("Power toggled");
      },
      setModelLoaded: () => {
        set((store) => {
          store.state.console.isModelLoaded = true;
        });
      },
      setIsFirstRun: (value) => {
        set((store) => {
          store.state.console.isFirstRun = value;
        });
      },
      setIsViewingContent: (value) => {
        set((store) => {
          store.state.console.isViewingContent = value;
        });
      },
      setShouldReturnToPosition: (value) => {
        set((store) => {
          store.state.console.shouldReturnToPosition = value;
        });
      },
      setSelectedOption: (value) => {
        set((store) => {
          store.state.console.selectedOption = value;
        });
      },
    },
  }))
);
