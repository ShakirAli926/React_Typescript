import CourseGoals from "./CourseGoals.tsx";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react";
interface CourseGoalsList {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}
export default function CourseGoalsList({
  goals,
  onDeleteGoal,
}: CourseGoalsList) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You' re collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals
              title={goal.title}
              id={goal.id}
              onDelete={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
}
