import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Krasny')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Site tech config')
        .child(
          S.document().schemaType('siteTechConfig').documentId('siteTechConfig')
        ),
      S.listItem()
        .title('Menu info')
        .child(S.document().schemaType('menuData').documentId('menuData')),
      S.listItem()
        .title('Home page')
        .child(
          S.document().schemaType('homePageData').documentId('homePageData')
        ),
      S.listItem()
        .title('Blog page')
        .child(
          S.document().schemaType('blogPageData').documentId('blogPageData')
        ),
      S.listItem()
        .title('CV page')
        .child(S.document().schemaType('cvPageData').documentId('cvPageData')),
      S.listItem()
        .title('All courses')
        .child(
          S.document().schemaType('allMyCourses').documentId('allMyCourses')
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'siteTechConfig',
            'menuData',
            'homePageData',
            'blogPageData',
            'cvPageData',
            'allMyCourses',
          ].includes(item.getId())
      ),
    ]);
