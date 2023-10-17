import { create, StateCreator } from 'zustand'
import { persist, devtools } from "zustand/middleware";

export type TGame = {
    score: number,
    updateScore: (amount: number) => void
}

const createStore: StateCreator<TGame> = (set) => ({
    score: 0,
    updateScore: (amount: number) => 
        set((state) => ({
            score: state.score + amount
        }))
    
})

export const GameStore = create<TGame>(
    devtools(persist(createStore, {name: 'game-store',})) as any
)