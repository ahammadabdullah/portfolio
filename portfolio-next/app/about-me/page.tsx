import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="min-h-screen text-center flex flex-col gap-10 mb-20 items-center justify-center w-full">
      <h3 className="text-3xl text-secondary mt-32 font-semibold">Who am I</h3>
      <div className="w-[80%]">
        <h3 className="text-secondary">
          Hi, I'm{" "}
          <Link href="/" className="text-highlight">
            Ahammad Abdullah
          </Link>
          , a Junior FullStack Developer passionate about building modern,
          AI-powered web applications with Next.js. I began my journey with the
          MERN stack after earning a Diploma in Engineering in Computer Science
          from Feni Govt. Computer Institute, and my expertise has grown
          significantly since then. As a competitive programmer and a 2-star
          coder on CodeChef, I bring a robust problem-solving approach to every
          project. Over time, I’ve expanded my toolkit beyond the basics—working
          with modern technologies like Nextjs, Supabase, Prisma, and Docker,
          while also contributing to ERP MVP solutions and various innovative
          projects. I thrive in both independent and collaborative, fast-paced
          development environments where continuous learning and adaptability
          are key.
        </h3>
      </div>
      <div className="text-secondary text-left w-[80%]">
        <h3 className="text-3xl pt-10 pb-10 font-semibold text-center">
          What I Know
        </h3>
        <p>
          <span className="text-highlight">Expertise:</span> Next.js,
          TypeScript, Supabase, Prisma, React, Redux, Tailwind CSS, NextAuth,
          Express.js, Node.js, MongoDB, JWT, and modern AI application
          development.
        </p>
        <p>
          <span className="text-highlight">Proficient In:</span> The MERN stack,
          competitive programming (CodeChef 2-star), and crafting scalable ERP
          solutions.
        </p>
        <p>
          <span className="text-highlight">Familiar With:</span>
          PostgreSQL, webhook and other UI/UX tools.
        </p>
        <p>
          <span className="text-highlight">Tools & Platforms:</span>
          Docker, Vercel, Git, GitHub, Figma, Adobe Photoshop, and MS Office.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
