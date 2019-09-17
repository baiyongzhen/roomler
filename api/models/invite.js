const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
const config = require('../../config')
const statuses = config.dataSettings.invite.statuses
const types = config.dataSettings.invite.types
const defaults = config.dataSettings.invite.defaults

const schema = new Schema({
  inviter: {
    type: ObjectId,
    ref: 'users',
    required: 'InviterIsRequired',
    index: true
  },
  room: {
    type: ObjectId,
    ref: 'rooms',
    required: 'RoomIsRequired',
    index: true
  },
  name: {
    type: String,
    required: 'NameIsRequired'
  },
  email: {
    type: String,
    required: 'EmailIsRequired'
  },
  type: {
    type: String,
    required: 'TypeIsRequired',
    enum: types,
    default: defaults.type
  },
  status: {
    type: String,
    required: 'StatusIsRequired',
    enum: statuses,
    default: defaults.status
  },
  invitee: {
    type: ObjectId,
    ref: 'users',
    index: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('invites', schema)