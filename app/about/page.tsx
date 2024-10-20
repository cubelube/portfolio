import { Metadata } from 'next';
import About from './About';

export const metadata: Metadata = {
  title: 'About Me',
  description: "Patchy's About Me Page",
};

export default function Page() {
  return (
    <section className="p-4 bg-black text-white rounded-lg shadow-md">
      <About />
    </section>
  );
}
