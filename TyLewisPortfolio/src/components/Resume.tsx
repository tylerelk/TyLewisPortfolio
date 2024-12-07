import _resume from "../assets/copy/resume.json";
import ResumeSection from "./ResumeSection";
import ResumeHeader from "./ResumeHeader";

export default function Resume() {
  const education = _resume.sections.education.items;
  const experience = _resume.sections.experience.items;
  const certs = _resume.sections.certifications.items;

  return (
    <>
      <div className='rounded-2xl w-full bg-white p-4 border-4 border-slate-500'>
        <ResumeHeader
          title='Education'
          startColor='from-pink-500'
          endColor='to-yellow-500'
        />
        {education.map((e) => {
          return (
            <ResumeSection
              key={e.id}
              id={e.id}
              header={e.institution}
              subheader={`${e.studyType} - ${e.area}`}
              dates={e.date}
            />
          );
        })}
        <ResumeHeader
          title='Certs'
          startColor='from-yellow-500'
          endColor='to-teal-300'
        />
        {certs.map((c) => {
          return (
            <ResumeSection
              key={c.id}
              id={c.id}
              header={c.name}
              subheader={c.issuer}
            />
          );
        })}
        <ResumeHeader
          title='Experience'
          startColor='from-teal-300'
          endColor='to-purple-600'
        />
        {experience.map((x) => {
          return (
            <ResumeSection
              key={x.id}
              id={x.id}
              header={x.company}
              dates={x.date}
              description={x.summary}
              subheader={x.position}
            />
          );
        })}
      </div>
    </>
  );
}
