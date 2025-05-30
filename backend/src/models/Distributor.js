
/*
   Campos:
      name
      service
      locals
      affiliationDate
*/

import { Schema, model } from "mongoose";

const distributorSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 100
    },
    service: {
        type: String,
        require: true,
        maxLength: 100
    },
    locals: {
        type: String,
        require: true,
        maxLength: 100
    },
    affiliationDate: {
        type: Date,
        require: true,
        min: 0,
    }
},{
    timestamps: true,
    strict: false
})

export default model("Distributor", distributorSchema)