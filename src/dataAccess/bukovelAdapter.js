import cheerio from 'cheerio';
import moment from 'moment-timezone';

const originalTimeZone = 'Europe/Kiev';
const skiLiftDateFormat = 'DD.MM.YYYY HH:mm:ss';
const usersTimeZone = moment.tz.guess();

export default function proceed(data) {
  const $ = cheerio.load(data.html);
  const orginalPurchaseDate = $('table #order_info_header_white:nth-child(1) > span').text();

  return getLifts($($('table')[1]));

  function getLifts($tableNode) {
    return $tableNode
      .find('tr')
      // skip first row,
      // because it is table header
      .slice(1)
      .map((index, element) => {
        var columns = $(element).find('td');

        return {
          skiLiftId: $(columns[0]).text(),
          date: moment.tz($(columns[1]).text(), skiLiftDateFormat, originalTimeZone).tz(usersTimeZone).format(),
          initialLift: $(columns[2]).text(),
          liftsLeft: $(columns[3]).text()
        }
      })
      .toArray();
  }
}