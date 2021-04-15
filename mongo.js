//mongodb+srv://userFullStack:<password>@cluster0.bnk5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');

const url =
  'mongodb+srv://mickeprado:pragmant64@cluster0.nqqnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error(err);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
});

/*note.save().then((result) => {
  console.log('note saved!');
  mongoose.connection.close();
});*/

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
