import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog/" }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        pubDate: z.date({coerce: true}),
        updatedDate: z.date({coerce: true }).optional(),
        coverArt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
    blog: blogCollection,
};