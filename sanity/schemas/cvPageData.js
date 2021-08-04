import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'cvPageData',
  type: 'document',
  title: 'CV page data',
  icon: () => <RiArticleLine />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'linkedin',
      title: 'LinkedIn profile link',
      type: 'string',
    },
    {
      name: 'github',
      title: 'Github profile link',
      type: 'string',
    },
    {
      name: 'cv',
      title: 'CV link',
      type: 'boolean',
    },
    {
      name: 'pdf',
      title: 'CV PDF link',
      type: 'string',
    },
    {
      title: 'Rich text',
      name: 'richText',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};
