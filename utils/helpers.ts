import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const sanityUrl = (str: string) =>
  str
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

export const sanitation = (arr: string[], cut: string): string[] => arr.map((a) => a.replace(cut, ''));

export const getDirection = (str: string): string => path.join(process.cwd(), str);

export const getPaths = (str: string) => {
  const directory = getDirection(str);
  const filenames = fs.readdirSync(directory);
  return sanitation(filenames, '.md');
};

export const getPost = (dir: string) => {
  const directory = getDirection(dir);
  const file = fs.readFileSync(directory, 'utf8');

  const { data: frontmatter, content } = matter(file);

  return {
    frontmatter,
    content,
  };
};

export const getPosts = (dir: string) => {
  const directory = getDirection(dir);
  const filenames = fs.readdirSync(directory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data: frontmatter, content } = matter(fileContent);

    return {
      filename: slug,
      frontmatter,
      content,
    };
  });

  return posts;
};
