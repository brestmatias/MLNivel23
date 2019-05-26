var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DNASchema = new Schema({
    dna:Array,
    mutant:Boolean
});

module.exports = mongoose.model('DNA', DNASchema);