import express, { Application, Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import Router from './routes';
//import ApiController from './controllers/apis';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json'
      }
    })
  );


app.use(Router);



app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');

    
});