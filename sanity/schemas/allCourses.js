import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import courseItem from './courseItem';

export default {
  title: 'All IT courses',
  name: 'allMyCourses',
  type: 'document',
  icon: () => <RiArticleLine />,
  fields: [
    {
      type: 'array',
      name: 'menuItems',
      title: 'Add menu items',
      of: [
        {
          name: 'courseItem',
          title: 'Course',
          type: 'courseItem',
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `All my courses`,
    }),
  },
};
