import connectDB from '../db/connection.js';
import categorisRouter from './modules/category/category.router.js'
import productRouter from './modules/product/product.router.js'
import cors from 'cors';

const initApp=(app,express)=>{
    connectDB();
    
var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
    app.use(cors(corsOptions));
app.use(express.json());
app.get('/',(req,res)=>{
    return res.status(200).json({message:"success"})
})

    app.use('/categoris',categorisRouter);
    app.use('/products',productRouter);
    app.get('*',(req,res)=>{
        return res.status(404).json({message:"page not found"})
    })
}
export default initApp;