import type Frontmatter from '@/declare/Frontmatter';
import type { MarkdownInstance } from 'astro'
import type { CollectionEntry, entryMap } from 'astro:content';

export default function (List: MarkdownInstance<Frontmatter>[]): MarkdownInstance<Frontmatter>[] {
  return List.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
    );
  });
}
export function SortCollectArticles<T extends keyof typeof entryMap>(List: CollectionEntry<T>[]): CollectionEntry<T>[] {
  return List.sort((a, b) => {
    return (
      // @ts-expect-error: Set limit key but still could not limit
      new Date(b.data.date).valueOf() -
      // @ts-expect-error: Set limit key but still could not limit
      new Date(a.data.date).valueOf()
    );
  });
}