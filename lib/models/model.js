'use strict';
const mongoose = require('mongoose');
class Model {
 constructor(schema) {
   this.schema = schema;
 }
 get(_id) {
   if (mongoose.Types.ObjectId.isValid(_id))
     return this.schema.findOne({ _id });
   else return null;
 }
 getFromField(query) {
   if (query) return this.schema.find(query);
   else return this.schema.find({});
 }
 create(record) {
   let validatedItem = new this.schema(record);
   return validatedItem.save();
 }
 update(_id, record) {
   let update = this.schema.findByIdAndUpdate(_id, record);
   return update;
 }
 delete(_id) {
   return this.schema.findByIdAndDelete(_id);
 }
 count(query) {
   return this.schema.countDocuments(query);
 }
}
module.exports = Model;