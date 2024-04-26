import express from 'express';
import {create as createHbsEngine} from 'express-handlebars'
import { CarouselRepeo } from './db/carousel.js';
import { FeatureRepo } from './db/feature.js';

//Tao app Express
const app = express();

//Cau hinh static files
app.use(express.static("public"));

const extname = "hbs";

//Cau hinh Handlebars
const hbs = createHbsEngine({
    extname,
    layoutsDir : "views/layouts",
    partialsDir : "views/partials",
    defaultLayout : "main",
    helpers : {
        eq: (left , right) => {
            return left === right
        },
        sum2Num: (numA , numB , options) => {
            console.log("Options" , options);
            const sum = numA + numB ; 
            
            return options.fn(sum);
        }
    }
});

//Khai bao engine voi Express
app.engine(extname , hbs.engine);
//Chon engine can dung
app.set("view engine" , extname);
//Cau hinh folder views
app.set("views" , "views/pages");

//Khai bao cac Routes

//Trang chu 
app.get("/" , (req , res) =>{
    const carouselItems = CarouselRepeo.getItems();
    const features = FeatureRepo.getFeatures();
    const categories = [
        {
            id: 'cate-1',
            name: 'Fruits',
            products: [
                {
                    id: 'pro-1',
                    name: 'Grapes',
                    image: 'img/fruite-item-5.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
                    price: '$4.99 / kg'
                }
            ],
        },
        {
            id: 'cate-2',
            name: 'Vegetables',
            products: [
                {
                    id: 'pro-2',
                    name: 'Raspberries',
                    image: 'img/fruite-item-2.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
                    price: '$4.99 / kg'
                }
            ],
        },
    ];

    // console.log(carouselItems);
    res.render("homepage", {
        carouselItems,
        features,
        categories,
    });
});

//Chay app Express
app.listen(3000, () => {
    console.log("App is running on port 3000");
});