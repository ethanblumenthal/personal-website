import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { IPost } from '../utils';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, onlyMetadata) {
  const realSlug = slug.endsWith('.mdx') ? slug.replace(/\.md$/, '') : slug.concat('.mdx');
  const fullPath = join(postsDirectory, `${realSlug}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return onlyMetadata ? { ...data } : { ...data, content };
}

export function getAllPosts(onlyMetadata) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, onlyMetadata))
    .filter((post: IPost) => post.isPublished)
    .sort((post1: IPost, post2: IPost) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export async function getAllTagsWithCount() {
  const allPosts = await getAllPosts(true);
  const allTagsWithCount = {};

  allPosts.forEach((post: IPost) => {
    post.tags.forEach((tag) => {
      allTagsWithCount[tag] ? allTagsWithCount[tag]++ : (allTagsWithCount[tag] = 1);
    });
  });

  return allTagsWithCount;
}

export async function getPostsByTag(tag) {
  const allPosts = (await getAllPosts(false)) ?? [];
  return allPosts.filter((post: IPost) => post.tags.includes(tag));
}
