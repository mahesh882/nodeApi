import Joi from 'joi';
import Items from '../models/items.model';


export default {
  //@ insert data with validation
   create: async(req, res) => {
    
    try {
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        url: Joi.string().required(),
        city: Joi.string().required(),
        location: Joi.string().required(),
        
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const items = await Items.create(value);
      return res.json(items);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  //@ get all record's
  async getAllRecords(req, res) {
    try {
      const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
      };
      const items = await Items.paginate({}, options);
      return res.json(items);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  //@ Insert Staic record's
  async insertSaticData(req,res){
   try {
      for(let i=1;i<=100;i++){
     
       var dataObj = {
    "name":"Product "+i,
    "url":"https://bit.ly/2OC7hJx",
    "city":"surat",
    "location":"Hirabaugh, Surat, Gujarat"
}
  
       var items = await Items.create(dataObj);
       
     }
     return res.json(items);
      
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  }

};
