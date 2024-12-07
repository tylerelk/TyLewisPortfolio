import _resume from "../../resume.json";

const Skills = () => {
  const skillEntries = _resume.sections.languages.items;
  const skillLevel = (level: number) => {
    const bubbles = [];
    for (let i = 0; i < 5; i++) {
      bubbles.push(
        <span
          className={`h-4 w-4 rounded-full border-gray-400 border-2 ${
            i < level ? "bg-yellow-300" : "bg-transparent"
          }`}
        ></span>
      );
    }
    return <div className='flex gap-1'>{bubbles}</div>;
  };
  return (
    <div className='flex flex-wrap justify-center gap-2 w-full my-6'>
      {skillEntries.map((s) => {
        return (
          <div
            key={s.id}
            className='w-1/3 h-auto flex justify-between items-center p-4 rounded-lg'
          >
            <p className='text-sm'>{s.name}</p>
            {skillLevel(s.level)}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
