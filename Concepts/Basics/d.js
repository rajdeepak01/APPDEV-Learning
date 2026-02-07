//unpacking or desructing object properties

let L = [10, 20, 30];
// console.log(L.length);

[a,b,c]=L;
// console.log(a,b,c);

class Box{
    constructor(h,w,d)
    {
        this.height=h;
        this.width=w;
        this.depth=d;
    }

}  

b1 = new Box(4,3,2);
const {height, width, depth}=b1;
console.log(height, width, depth);
