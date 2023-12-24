class Document{
    static MaxSize = 256;
    #size;
    constructor(size){
        this.size = size;
    }

get Size(){
return this.#size;
}

set Size(n){
 if(n <= this.constructor.MaxSize){
   this.#size = n;
 return n;
}
}

getContents(){
 return "the file is empty";
}

}

class TextDocument extends Document{
#contents;
constructor( contents ,size){
 super(size);
this.#contents = contents;
}

getContents(){
 return this.#contents;
}
}

const c = new Document(300);
console.log(c.getContents())
console.log(c);