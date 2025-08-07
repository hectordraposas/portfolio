const AboutMeComponent = () => {
  return (
    <section className=" bg-amber-50 mt-5 pb-10">
      <h1 className="text-center p-5 text-2xl font-extrabold">About Me</h1>
      <div className="text-lg leading-relaxed w-[90%] md:w-[70%] mx-auto">
        <p className="text-lg leading-relaxed">
          Hi, once again I’m{" "}
          <span className="font-semibold text-blue-600">
            Hector Dela Cruz Raposas
          </span>
          , a frontend developer passionate about building modern and responsive
          web interfaces. I work with{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and semantic{" "}
          <span className="font-semibold">HTML/CSS</span> to bring ideas to
          life.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I enjoy turning complex problems into simple, beautiful, and intuitive
          user experiences. My focus is on writing clean, maintainable code and
          staying up-to-date with the latest frontend technologies and best
          practices.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I’m currently expanding my knowledge, building projects, and aiming to
          grow into a well-rounded web developer.
        </p>
      </div>
    </section>
  );
};

export default AboutMeComponent;
