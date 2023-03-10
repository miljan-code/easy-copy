import { TbLanguage, TbArticle } from 'react-icons/tb';
import { BiMessageEdit } from 'react-icons/bi';
import { MdOutlineSummarize } from 'react-icons/md';

export const getNavIcon = (label: string) => {
  if (label === 'Grammar Checker') return TbLanguage;
  if (label === 'Paraphraser') return BiMessageEdit;
  if (label === 'Article Writer') return TbArticle;
  if (label === 'Text Summarizer') return MdOutlineSummarize;
  else return TbLanguage;
};
