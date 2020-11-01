import { connect } from 'mongoose';

(async function(){
  try {
    await connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`, {
      useNewUrlParser : true,
      useUnifiedTopology: true
    });

    console.log('MongoDB running...');
  }catch(e){
    console.log(e);
  }
})();