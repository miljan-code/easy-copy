import { ArticleProvider } from '@/context/ArticleContext';
import { ArticleWriter, PageInfo } from './components';

const ArticleWriterPage = () => {
  return (
    <ArticleProvider>
      <ArticleWriter />
      <PageInfo />
    </ArticleProvider>
  );
};

export default ArticleWriterPage;
