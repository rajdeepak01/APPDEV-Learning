class Box{
    constructor(h,w,d)
    {
        this.height=h;
        this.width=w;
        this.depth=d;
    }

    set height(h){
        this.height=h;
    }
    set width(w){
        this.width=w;
    }
    set depth(d){
        this.depth=d;
    }

    volume()
    {
        return this.height*this.depth*this.width;
    }
}  

b1 = new Box(2, 3, 4);
console.log(b1.volume());
b1.height=10;
console.log(b1.volume());
