import { createBlogPages } from './src/gatsby/createBlogPages';
import { turnCategoriesIntoPages } from './src/gatsby/turnCategoriesIntoPages';
import { turnTagsIntoPages } from './src/gatsby/turnTagsIntoPages';

export { createSchemaCustomization } from './src/gatsby/createSchemaCustomization';
export { onCreateNode } from './src/gatsby/onCreateNode';

// Create pages dynamically
// Wait for all promises to be resolved before finishing this function
export async function createPages(params) {
    await Promise.all([turnCategoriesIntoPages(params)]);
}
