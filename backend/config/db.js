const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@devconnector-taghu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB: connessione riuscita');
  } catch (err) {
    console.log('MongoDB: connessione fallita');
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
