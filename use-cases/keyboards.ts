import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const getKeyboards = () => {
  const keyboards = [];

  base('keebmania')
    .select({
      view: 'keyboards'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          keyboards.push(record.fields);
        });

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  return keyboards;
};

export { getKeyboards };
