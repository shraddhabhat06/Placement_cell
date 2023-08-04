const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(`mongodb+srv://shraddhabhat06:ZsRVxYtsXWifsrM7@cluster0.ah9uhcn.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTED SUCCESSFULLY"))
    .catch((err) => {
      console.log("DB CONNECTION FAILED");
      console.log(err);
      process.exit(1);
    });
};




// mongoose.connect(`mongodb://127.0.0.1/placementcell`)

// // acquire the connection (to check if it is successful)
// const db = mongoose.connection;

// // error
// db.on('error',console.error.bind(console,'error connecting to db'));

// // up and running then print the message
// db.once('open',function(){
//     console.log('Successfully connected to the database');
// });