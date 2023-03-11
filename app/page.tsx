import { GrammarProvider } from '@/context/GrammarContext';
import { GrammarChecker, PageInfo } from './components';

export default function Home() {
  return (
    <GrammarProvider>
      <GrammarChecker />
      <PageInfo />
    </GrammarProvider>
  );
}
