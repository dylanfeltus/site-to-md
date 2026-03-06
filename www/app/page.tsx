import { Hero } from '@/components/Hero';
import { TerminalDemo } from '@/components/TerminalDemo';
import { OutputExamples } from '@/components/OutputExamples';
import { HowItWorks } from '@/components/HowItWorks';
import { UseCases } from '@/components/UseCases';
import { FrameworkSupport } from '@/components/FrameworkSupport';
import { Companies } from '@/components/Companies';
import { Installation } from '@/components/Installation';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TerminalDemo />
      <OutputExamples />
      <HowItWorks />
      <UseCases />
      <FrameworkSupport />
      <Companies />
      <Installation />
      <Footer />
    </main>
  );
}
