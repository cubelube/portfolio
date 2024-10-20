"use client";

export default function About() {
  const birthDate = new Date('2007-01-07');
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const isBirthdayPassed =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());
  const actualAge = isBirthdayPassed ? age : age - 1;

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About Me</h1>
      <p className="mb-4">
        I'm a {actualAge} year old software engineer passionate about free and open source software.
      </p>

      <h2 className="font-semibold text-xl mb-4">Work Experience</h2>
      <ul className="mb-8">
        <li className="mb-2">
          <strong>Assistant DevOps Engineer</strong> – Prism Controls (2024–Present)
        </li>
      </ul>

      <h2 className="font-semibold text-xl mb-4">Skills</h2>
      <ul className="mb-8">
        <li className="mb-2">Rust programming</li>
        <li className="mb-2">Linux system administration</li>
        <li className="mb-2">C and C++ programming</li>
        <li className="mb-2">Python scripting</li>
        <li className="mb-2">Setting up CI/CD pipelines</li>
        <li className="mb-2">Working with Docker and containers</li>
      </ul>

      <h2 className="font-semibold text-xl mb-4">Education</h2>
      <ul className="mb-8">
        <li className="mb-2">
          <strong>High School</strong> – Homeschooled (Class of 2025)
        </li>
      </ul>

      <h2 className="font-semibold text-xl mb-4">Certifications and Awards</h2>
      <ul className="mb-8">
        <li className="mb-2">Eagle Scout – 2022</li>
        <li className="mb-2">CompTIA A+ – 2024</li>
        <li className="mb-2">CompTIA Linux+ – 2024</li>
      </ul>

      <h2 className="font-semibold text-xl mb-4">Interests</h2>
      <ul className="mb-8">
        <li className="mb-2">Chess</li>
        <li className="mb-2">Learning Esperanto</li>
        <li className="mb-2">Hiking</li>
      </ul>

      <h2 className="font-semibold text-xl mb-4">Future Goals</h2>
      <p className="mb-8">
        I want to explore the field of cybersecurity and get better at software engineering.
      </p>
    </div>
  );
}
