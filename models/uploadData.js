const mongoose = require('mongoose');

const UserUploadSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userDataDobby',
        required: true,
    },  
    image: {type:String,default:""},
    name:{type:String,default:""},
  },{
     timestamps:true 
  });
  module.exports = mongoose.model('UserUploadData', UserUploadSchema);