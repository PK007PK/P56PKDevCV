export default {
  title: 'Menu item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Page name',
      name: 'pageName',
      type: 'string',
    },
    {
      title: 'Page slug',
      name: 'pageSlug',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
