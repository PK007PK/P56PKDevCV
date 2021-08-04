export default {
  title: 'Course item',
  name: 'courseItem',
  type: 'object',
  fields: [
    {
      title: 'Course name',
      name: 'courseName',
      type: 'string',
    },
    {
      title: 'Platform',
      name: 'platform',
      type: 'string',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
  ],
  preview: {
    select: {
      title: 'courseName',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
