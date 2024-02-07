import {
  // type FC,
  PropsWithChildren,
  // type ReactNode
} from "react";
// Special Decorator

// interface CourseGoalsProps {
//   title: string;
//   //   description: string;
//   children: ReactNode;
// }
//----------------OR-----------------
// type CourseGoalsProps = {
//   title: string;
//   //   description: string;
//   children: ReactNode;
// };
//----------------OR-----------------

type CourseGoalsProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

export default function CourseGoals({
  title,
  id,
  children,
  onDelete,
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

//  -----------OR------------
// const CourseGoals: FC<CourseGoalsProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoals;
