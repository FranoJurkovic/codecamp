import React from "react";
import Task1 from "./Components/Task1/task1.1";
import Task2 from "./Components/Task1/task1.2";
import Task3 from "./Components/Task1/task1.3";
import Task4 from "./Components/Task1/task1.4";
import Task5 from "./Components/Task1/task1.5";
import Task6 from "./Components/Task1/task1.6";
import Task7 from "./Components/Task1/task1.7";
import Task8 from "./Components/Task2/task2.1";
import Task9 from "./Components/Task2/task2.2";
import Task10 from "./Components/Task3/task3.1";
import Task11 from "./Components/Task3/task3.2";
import Task12 from "./Components/Task3/task3.3";
import Task13 from "./Components/Task3/task3.4";
import Task14 from "./Components/Task3/task3.5";

export const App: React.FC = () => {
  return (
    <div>
      <Task1 godina={20} />
      <Task2 temperatura={20} />
      <Task3 logiran={true} />
      <Task4 ime="Frano" prezime="Jurković" />
      <Task5 ime="Frano" prezime="Jurković" godinaRođenja={2000} />
      <Task6 ime="Frano" prezime="Jurković" />
      <Task7/>
      <Task8 />
      <Task9 />
      <Task10 />
      <Task11 />
      <Task12 />
      <Task13 />
      <Task14 />
    </div>
  );
};
