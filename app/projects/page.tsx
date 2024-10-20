import { Metadata } from 'next';
import Projects from './Projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Patchy's Projects",
};

export default function Page() {
  return (
    <section className="p-4 bg-black text-white rounded-lg shadow-md">
      <Projects />
    </section>
  );
}
