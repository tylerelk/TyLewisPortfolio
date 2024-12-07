interface SectionProps {
  id: string;
  header: string;
  description?: string;
  location?: string;
  subheader?: string;
  dates?: string;
}

const ResumeSection: React.FC<SectionProps> = ({
  id,
  header,
  description,
  location,
  subheader,
  dates,
}) => {
  return (
    <>
      <div id={id} className='w-full gap-3 my-4'>
        <span className='text-left'>
          <h2 className='text-2xl'>{header}</h2>
          {subheader && <h3 className='text-sm font-mono'>{subheader}</h3>}
          {dates && <h3 className='italic text-gray-600 text-left'>{dates}</h3>}
        </span>
        {location && <h3>{location}</h3>}
        {description && (
          <div
            className=' w-3/4 mx-auto my-3 p-3 border-2 border-x-slate-500 border-y-transparent rounded-3xl text-left'
            dangerouslySetInnerHTML={{
              __html: typeof description === "string" ? description : "",
            }}
          />
        )}
      </div>
    </>
  );
};

export default ResumeSection;
