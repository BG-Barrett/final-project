import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import authors from "./content/authors/authors.json";

const authorNames = authors.map((author) => author.name) as [
  string,
  ...string[],
];

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    author: z.enum(authorNames),
    imageSrc: z.string(),
    imageAlt: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    featured: z.boolean(),
  }),
});

export const collections = { articles };
