import SocialProfiles from "@/components/sections/SocialProfiles";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <div className="py-20 lg:py-24 px-6 mx-auto max-w-7xl">
        <div className="relative">
          <h1>Kamalpreet Singh</h1>
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-24 z-10">
            <h2>Front-End Developer</h2>
            <SocialProfiles />
          </div>
          <div className="absolute top-[-3rem] lg:top-[-3.5rem] -left-12 w-40 lg:w-[13rem] h-40 lg:h-[13rem] bg-teal-400 rounded-full" />
        </div>
        <div className="grid-3 gap-10 lg:gap-24 items-start mt-12 lg:mt-24">
          <WorkExperience />
          <div>
            {/* Profile */}
            <h3>Profile</h3>
            <p>
              I am a seasoned front-end developer with over 3 years of
              experience, currently working at Ellocent Labs IT Solutions. My
              expertise lies in creating dynamic and intuitive websites with a
              strong focus on user experience. With a solid foundation in HTML5,
              CSS3, and JavaScript, I have expanded my skill set to include
              various modern frameworks and libraries.
              <br />
              <br />
              I have extensive experience working with technologies such as
              Tailwind CSS, Svelte, SvelteKit, Next.js, and React.js. These
              tools have allowed me to develop interactive and visually
              appealing websites for clients across different industries,
              including real estate and digital agencies. I have also worked on
              integrating APIs like GraphQL, enhancing the functionality and
              versatility of the websites I create.
              <br />
              <br />
              In addition to my front-end development skills, I have recently
              ventured into the realm of chat applications. Using the latest
              Next.js app directory, TypeScript, Tailwind CSS, WebSocket, and
              Ant Design (Antd), I am now proficient in developing chat
              applications similar to WhatsApp. This has further expanded my
              technical repertoire and allows me to create real-time
              communication platforms that offer seamless user experiences.
              <br />
              <br />
              Throughout my career, I have consistently delivered high-quality
              work and have earned a reputation for being a reliable and skilled
              developer. I thrive in collaborative environments, leveraging my
              technical expertise and problem-solving abilities to contribute to
              successful project outcomes. My dedication to staying up to date
              with the latest industry trends and technologies ensures that I
              can provide innovative solutions to meet the evolving needs of
              clients and users.
              <br />
              <br />I am passionate about front-end development and always
              strive to create websites and applications that not only meet the
              functional requirements but also leave a lasting impression on
              users. I am excited to continue growing in my role at Ellocent
              Labs IT Solutions and contribute to cutting-edge projects that
              push the boundaries of web development.
            </p>
            {/* Skills */}
            <h3 className="mt-12 lg:mt-16">Skills</h3>
            {/* Skills 1 */}
            <h4>Programming Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
            {/* Skills 2 */}
            <h4 className="mt-8">Libraries &amp; Frameworks</h4>
            <ul>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Next.js</li>
              <li>Gatsby.js</li>
            </ul>
            {/* Education */}
            <h3 className="mt-12 lg:mt-16">Education</h3>
            <h4 className="mb-1">Name Of University</h4>
            <p className="mb-1">Enter Your Degree</p>
            {/* References */}
            <h3 className="mt-12 lg:mt-16">References</h3>
            {/* Reference 1 */}
            <h4 className="mb-1">Reference Name 1</h4>
            <p>Reference Title 1</p>
            {/* Reference 2 */}
            <h4 className="mt-8 mb-1">Reference Name 2</h4>
            <p className="mb-1">Reference Title 2</p>
          </div>
        </div>
      </div>
    </main>
  );
}
