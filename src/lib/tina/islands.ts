// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';
import type { PostQuery } from '../../../tina/__generated__/types';
import ArticleBody from '../../components/tina/ArticleBody.astro';
import { getPost } from './data';

export const islands: IslandRegistry = {
  post: {
    fetch: (_request, params) => getPost(params.get('slug') ?? ''),
    component: ArticleBody,
    wrapper: { tag: 'article', className: 'container flow full-article' },
    propsFromData: (data) => ({
      data: (data as QueryResult<PostQuery>).data?.post,
    }),
  },
};
