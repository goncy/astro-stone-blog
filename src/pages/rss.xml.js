import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('blog');

  return rss({
    title: 'Gonzalo Pozzo',
    description: 'Solutions Engineer, content creator, frontend developer, in 🖤 with React.',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.slug}/`,
    })),
  });
}
