import CourseGoals from "./CourseGoals";
import { type CourseGoal as CGoal } from "../App";

interface CourseGoalsList {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}
export default function CourseGoalsList({
  goals,
  onDeleteGoal,
}: CourseGoalsList) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
}
