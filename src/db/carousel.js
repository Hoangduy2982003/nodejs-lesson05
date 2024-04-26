export class CarouselRepeo {
    static _items = [
        {
            id : 1,
            url : "img/hero-img-1.png",
            title : "fruits",
        },
        {
            id : 2,
            url : "img/hero-img-2.jpg",
            title : "vegetables",
        },{
            id : 3,
            url : "img/hero-img-1.png",
            title : "fruits",
        },
        {
            id : 4,
            url : "img/hero-img-2.jpg",
            title : "vegetables",
        }
    ];

    static getItems(){
        return this._items;
    }
}