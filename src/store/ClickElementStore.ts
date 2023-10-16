import create from "zustand"
import { persist } from "zustand/middleware"

type TClickElementItem = {
    elements: number[]
    currentEarnings: number
    currentSpeed: number
    currentRunProgress: number
    upgradeLevel: () => number
    upgradeCost: () => number
    changeText: () => void
    buffs: (() => void)[]
    numberInFocus: number,
    test: string
}

export const ClickElementsStore = create(
    persist(
        (set) => ({
        elements: [1, 2, 3],
        currentEarnings: 0.25,
        currentSpeed: 0.01,
        currentRunProgress: 0,
        upgradeLevel() {
            return 0
        },
        upgradeCost() {
            return 0
        },
        changeText() {
            set((state: TClickElementItem) => ({
                ...state,
                test: "mhmmm"
            }))
        },
        buffs: [() => {}],
        numberInFocus: 0,
        }),
        {
        name: "click-element-store",
        }
    )
)
