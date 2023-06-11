import Profiles from "@/components/sections/Profiles";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
  <div className="py-20 lg:py-24 px-6 mx-auto max-w-7xl">
    <div className="relative">
      <h1>Kamalpreet Singh</h1>
      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-24 z-10">
        <h2>Front-End Developer</h2>
         <Profiles />
      </div>
      <div className="absolute top-[-3rem] lg:top-[-3.5rem] -left-12 w-40 lg:w-[13rem] h-40 lg:h-[13rem] bg-teal-400 rounded-full" />
    </div>
    <div className="grid-3 gap-10 lg:gap-24 items-start mt-12 lg:mt-24">
      {/* Work Experience */}
      <div className="lg:col-span-2">
        <h3>Work Experience</h3>
        {/* Work Experience 1 */}
        <div className="grid-3 gap-x-6">
          <div>
            {/* Company 1 */}
            <h4 className="mb-1 lg:mb-4">Company Name 1</h4>
            <p className="text-sm mb-1">
              <a
                href="https://resumewind.com/"
                target="_blank"
                rel="noreferrer"
              >
                companywebsite.com
              </a>
            </p>
            <p className="text-sm">Sept. 2021 - Present</p>
          </div>
          <div className="lg:col-span-2">
            {/* Job Title 1 */}
            <h4 className="mb-4">Job Title 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              imperdiet urna. Praesent eu posuere magna, in suscipit quam. Here
              is an example of an
              <a
                href="https://resumewind.com/"
                target="_blank"
                rel="noreferrer"
              >
                external link
              </a>
              .
            </p>
            <p>
              Mauris ullamcorper neque in ultrices mollis. Sed justo eros,
              mollis sed odio id, finibus gravida enim. Aenean pharetra ante
              elit, sit amet accumsan felis suscipit vitae. Vestibulum ante
              ipsum primis.
            </p>
            <ul>
              <li>Cras in erat bibendum, rhoncus nisl ac, luctus tortor</li>
              <li>Vivamus volutpat nunc non quam dapibus</li>
              <li>Nulla molestie odio odio, ut congue dui</li>
            </ul>
          </div>
        </div>
        {/* Work Experience 2 */}
        <div className="grid-3 gap-x-6 mt-8 lg:mt-12">
          <div>
            {/* Company 2 */}
            <h4 className="mb-1 lg:mb-4">Company Name 2</h4>
            <p className="text-sm mb-1">
              <a
                href="https://resumewind.com/"
                target="_blank"
                rel="noreferrer"
              >
                companywebsite.com
              </a>
            </p>
            <p className="text-sm">Oct. 2019 - Sept. 2021</p>
          </div>
          <div className="lg:col-span-2">
            {/* Job Title 2 */}
            <h4 className="mb-4">Job Title 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              imperdiet urna. Praesent eu posuere magna, in suscipit quam. Here
              is an example of an
              <a
                href="https://resumewind.com/"
                target="_blank"
                rel="noreferrer"
              >
                external link
              </a>
              .
            </p>
            <p>
              Mauris ullamcorper neque in ultrices mollis. Sed justo eros,
              mollis sed odio id, finibus gravida enim. Aenean pharetra ante
              elit, sit amet accumsan felis suscipit vitae. Vestibulum ante
              ipsum primis.
            </p>
            <ul>
              <li>Cras in erat bibendum, rhoncus nisl ac, luctus tortor</li>
              <li>Vivamus volutpat nunc non quam dapibus</li>
              <li>Nulla molestie odio odio, ut congue dui</li>
            </ul>
          </div>
        </div>
        {/* Work Experience 3 */}
        <div className="grid-3 mt-8 lg:mt-12">
          <div>
            {/* Company 3 */}
            <h4 className="mb-1 lg:mb-4">Company Name 3</h4>
            <p className="text-sm mb-1">
              <a
                href="https://resumewind.com/"
                target="_blank"
                rel="noreferrer"
              >
                companywebsite.com
              </a>
            </p>
            <p className="text-sm">Jan. 2016 - Oct. 2019</p>
          </div>
          <div className="lg:col-span-2">
            {/* Job Title 3 */}
            <h4 className="mb-4">Job Title 3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              imperdiet urna. Praesent eu posuere magna, in suscipit quam. Here
              is an example of an
              <a
                href="https://resumewind.com/"
                target="_blank"
                rel="noreferrer"
              >
                external link
              </a>
              .
            </p>
            <p>
              Mauris ullamcorper neque in ultrices mollis. Sed justo eros,
              mollis sed odio id, finibus gravida enim. Aenean pharetra ante
              elit, sit amet accumsan felis suscipit vitae. Vestibulum ante
              ipsum primis.
            </p>
            <ul>
              <li>Cras in erat bibendum, rhoncus nisl ac, luctus tortor</li>
              <li>Vivamus volutpat nunc non quam dapibus</li>
              <li>Nulla molestie odio odio, ut congue dui</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* Profile */}
        <h3>Profile</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
          sapien ligula, vestibulum eleifend erat pellentesque quis. Suspendisse
          potenti. Mauris et malesuada nisl, eu tempus nisi.
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

  )
}
