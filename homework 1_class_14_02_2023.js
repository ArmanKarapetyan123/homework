class Library{
    constructor(author, data, pageCount,thisPage){
        this.author = author;
        this.data = data;
        this.pageCount = pageCount;
        this.thisPage = thisPage;
    }


    browsePage(){
        
       for(let i = this.thisPage; i < this.pageCount; i++){
        console.log(i);
    }
    return console.log("Congratulations");
    
}

}
const arr = [new Library("Hendo",1956,120,23), new Library("Thom",1988,220,190), new Library("Ira",2016,156,110)];

for(let item in arr){
    console.log(arr[item].browsePage())
}