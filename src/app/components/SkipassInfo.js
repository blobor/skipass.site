import React from 'react'
import isEmpty from 'lodash.isempty'
import LiftsTable from './LiftsTable'
import { getAdoptedDateString } from '../helpers/date'

const renderLifts = lifts => isEmpty(lifts) ? null : <LiftsTable lifts={lifts} />

const SkipassInfo = ({ skipass }) => (
  <section className='scipass-info'>
    <h5>{skipass.name}</h5>
    <table className='mdl-data-table mdl-shadow--2dp scipass-info__table'>
      <tbody>
        <tr>
          <td>Сard Number</td>
          <td className='mdl-data-table__cell--non-numeric'>
            {skipass.cardNumber}
          </td>
        </tr>
        <tr>
          <td>Purchase Date</td>
          <td className='mdl-data-table__cell--non-numeric'>
            {getAdoptedDateString(skipass.purchaseDate)}
          </td>
        </tr>
      </tbody>
    </table>
    {renderLifts(skipass.lifts)}
  </section>
)

SkipassInfo.propTypes = {
  skipass: React.PropTypes.object.isRequired
}

export default SkipassInfo
