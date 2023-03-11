import { ParaphraseProvider } from '@/context/ParaphraseContext';
import { Paraphraser, PageInfo } from './components';

const ParaphraserPage = () => {
  return (
    <ParaphraseProvider>
      <Paraphraser />
      <PageInfo />
    </ParaphraseProvider>
  );
};

export default ParaphraserPage;
