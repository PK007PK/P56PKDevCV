// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import siteSettings from './siteSettings';
import menuData from './menuData';
import homePageData from './homePageData';
import blogPageData from './blogPageData';
import cvPageData from './cvPageData';
import blogPosts from './blogPosts';
import allCourses from './allCourses';
import blogPostsCategories from './blogPostsCategories';
import blogPostsTags from './blogPostsTags';
import menuItem from './menuItem';
import courseItem from './courseItem';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    menuData,
    homePageData,
    blogPageData,
    allCourses,
    cvPageData,
    blogPosts,
    blogPostsCategories,
    blogPostsTags,
    menuItem,
    courseItem,
  ]),
});
