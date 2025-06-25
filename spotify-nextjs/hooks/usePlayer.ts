import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activateId?: string;
    setId: (id: string) => void;
    setIds: (id: string[]) => void;
    reset: () => void;
}

const usePlayer = create<PlayerStore>((set=>({
    ids: [],
    activateId: undefined,
    setId: (id: string) => set({activateId: id}),
    setIds: (ids: string[]) => set({ids: ids}),
    reset: () => set({ids: [], activateId: undefined})
})))

export default usePlayer

