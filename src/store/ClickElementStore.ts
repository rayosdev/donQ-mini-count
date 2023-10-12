import { create } from "zustand";
import { persist } from "zustand/middleware";

type TClickElementItem = {
    elements: number[];
    currentErnings: number;
    currentSpeed: number;
    currentRunProgress: number;
    upgradeLevel: () => number;
    upgradeCost: () => number;
    changeText: () => void;
    buffs: [()=>void];
    numberInFocus: number;
}

type TClickElementStore = {
    elements: TClickElementItem[],
}


export const ClickElementsStore = create<TClickElementItem>()(
    persist(
    (set) => ({
        elements: [1,2,3],
        currentErnings: 0.25,
        currentSpeed: 0.01,
        currentRunProgress: 0,
        upgradeLevel() {
            return 0
        },
        upgradeCost() {
            return 0
        },
        changeText(){
            set( state => {
                ...state
                test: "done" + Math.random()
            })
        },
        buffs: [() => {}],
        numberInFocus: 0,
    }),
    {
        name: "click element store"
    })
)
