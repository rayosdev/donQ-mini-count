import React, { useContext, useState, ReactNode } from "react";

const ScoreContext = React.createContext(0)
const UpdateScoreContext = React.createContext(() => {})

export function useScore(){return useContext(ScoreContext)}
export function useScoreUpdate(){return useContext(UpdateScoreContext)}

export function ScoreProvider({ children }: { children: ReactNode }) {

    const [score, setScore] = useState(12)

    const handleCounterClick = () => {
        setScore(score + 10)
      };

    return (
      <ScoreContext.Provider value={score}>
        <UpdateScoreContext.Provider value={handleCounterClick}>
            {children}
        </UpdateScoreContext.Provider>
      </ScoreContext.Provider>
    );
  }