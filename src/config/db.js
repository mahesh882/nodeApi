import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
//@ mongodb database connection 
export const connect = () => mongoose.connect('mongodb+srv://mahesh:FvwQP5hjaNyK2W83@elseif.9rtma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
