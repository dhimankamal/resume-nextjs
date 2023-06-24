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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper sapien ligula, vestibulum eleifend erat pellentesque quis.
              Suspendisse potenti. Mauris et malesuada nisl, eu tempus nisi.
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
