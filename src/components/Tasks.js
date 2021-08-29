import Task from "./Task";

const Tasks = ({ components, onDelete, onToggle }) => {
  return (
    <>
      {components.map((t) => (
        <Task key={t.id} task={t} onDelete={() => onDelete(t.id)} onToggle={onToggle}/>
      ))}
    </>
  );
};

export default Tasks;
