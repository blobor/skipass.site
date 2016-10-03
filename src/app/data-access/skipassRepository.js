import { get as getProp } from 'lodash.get'
import isEmpty from 'lodash.isempty'
import moment from 'moment'
import PouchDB from './PouchDB-client'
import { getSkipass } from './bukovelAPI'

const DB_NAME = 'skipasses'
const db = new PouchDB(DB_NAME)

const prepareToSave = obj => {
  const objToSave = {
    _id: getProp(obj, '_id', Date.now().toString()),
    updateDate: moment.utc().toJSON()
  }

  return Object.assign({}, obj, objToSave)
}

const get = id => {
  return db.find({
    selector: {
      cardNumber: id
    }
  })
  .then(result => {
    if (isEmpty(result.docs)) {
      return getAndUpdateToLatest(id)
    }
    return result.docs[0]
  })
  .catch(getAndUpdateToLatest)
}

const getAndUpdateToLatest = async id => {
  const skipass = await getSkipass(id)
  await save(skipass)

  return skipass
}

const save = skipass => {
  const skipassToSave = prepareToSave(skipass)

  return db.put(skipassToSave)
}

export {
  get,
  getSkipass as getLatest
}