const Note = require("../models/Note");

module.exports.notes_get = async (req , res) =>{
   const notes = await Note.find({});
    res.render('Notes', {notes});  
}

module.exports.note_post = async (req , res) =>{
    
    const note = await Note.create({title: req.body.title, text: req.body.text, name:req.body.name}); 
    res.redirect('/notes');
}

module.exports.note_delete = async (req , res) =>{
    await Note.findByIdAndRemove({_id:req.body.noteId});
    res.status(200).json('note was deleted');
}

module.exports.note_put = async (req , res) =>{   
    const note = await Note.findOneAndUpdate({_id:req.body.noteId}, { title: req.body.title, text: req.body.text, name:req.body.name });  
    res.status(200).json('note updated');
}