import React from "react";

export default function WorkExperience() {
  return (
    <div className="lg:col-span-2">
      <h3>Work Experience</h3>
      {/* Work Experience 1 */}
      <div className="grid-3 gap-x-6">
        <div>
          {/* Company 1 */}
          <h4 className="mb-1 lg:mb-4">Ellocent Labs IT Solutions Pvt. Ltd.</h4>
          <p className="text-sm mb-1">
            <a
              href="https://www.ellocentlabs.com/"
              target="_blank"
              rel="noreferrer"
            >
              www.ellocentlabs.com
            </a>
          </p>
          <p className="text-sm">Feb. 2022 - Present</p>
        </div>
        <div className="lg:col-span-2">
          {/* Job Title 1 */}
          <h4 className="mb-4">Frontend Developer</h4>
          <p>
            As a front-end developer with over 1.5 years of experience at
            Ellocent labs IT Solutions, I have gained expertise in a range of
            technologies including sveltekit, svelte, next js, typescript,
            javascript, tailwind css, windi css, git, gitlab, graphql, socket,
            and react js.
          </p>
          <p>
            Throughout my career, I have developed a variety of interactive and
            customer-focused websites for clients in different industries,
            including real estate, digital agencies, and cryptocurrency apps. My
            strong technical skills and ability to deliver high-quality work
            have allowed me to create engaging and user-friendly websites that
            meet the needs of my clients.
          </p>
          <p>
            I am constantly looking to learn and expand my skillset, and I am
            excited to bring my expertise to new challenges and opportunities in
            the field of front-end development.
          </p>
        </div>
      </div>
    </div>
  );
}
