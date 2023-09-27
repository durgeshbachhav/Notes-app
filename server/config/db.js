const { connect } = require("mongoose")

const connectDatabase = async () => {
     try {
          await connect('mongodb+srv://notes_app:t1ni13gOYrKZimMr@cluster0.vcqd6jd.mongodb.net/notes_app')
          console.log(`database connected successfully`);
     } catch (error) {
          console.log(`getting error to config database`, error);
     }
}

module.exports =  connectDatabase;