import { create } from "zustand";

interface State {
  count: string | number;
}

interface Actions {
  setCount: (value: string | number) => void;
}

const useStore = create<State & Actions>((set) => ({
  count: 0,
  setCount: (value: string | number) => set(() => ({ count: value })),
}));

export default useStore;
