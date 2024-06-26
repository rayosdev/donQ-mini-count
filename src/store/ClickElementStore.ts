import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";

type TClickElementItem = {
    currentEarnings: number
    currentSpeed: number
    currentRunProgress: number
    upgradeLevel: () => number
    upgradeCost: () => number
    buffs: (() => void)[]
    numberInFocus: number
    lastTick: number | null
    isRunning: boolean
}

type TClickElementsStore = {
    items: TClickElementItem[];
    addItem: (item: TClickElementItem) => void;
    updateItem: (index: number, newItem: Partial<TClickElementItem>) => void
};

const createStore: StateCreator<TClickElementsStore> = (set) => ({
    items: [],
    addItem: (item: TClickElementItem) =>
        set((state) => ({
            items: [...state.items, item],
        })),
    updateItem: (index: number, newItem: Partial<TClickElementItem>) =>
        set((state) => {
            const items = [...state.items]
            items[index] = { ...items[index], ...newItem }
            return {items}
        })
});

const options = {
    name: 'click-element-store',
};

export const ClickElementsStore = create<TClickElementsStore>(
    devtools(persist(createStore, options)) as any
)

export const addItemToStore = (addItemFunction: (item: TClickElementItem) => void, item?: Partial<TClickElementItem>) => {
    const defaultItem = {
        currentEarnings: 3,
        currentSpeed: 0.1,
        currentRunProgress: 0,
        upgradeLevel: () => 0,
        upgradeCost: () => 0,
        buffs: [],
        numberInFocus: 0,
        lastTick: null,
        isRunning: false
    };

    // Merge the default values with the provided values
    const newItem = {
        ...defaultItem,
        ...item
    };

    addItemFunction(newItem);
};
