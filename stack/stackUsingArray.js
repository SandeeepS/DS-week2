class stack{
    constructor(maxSize){
        this.ele = [];
        this.top = -1;
        this.maxSize = maxSize;
    }

    push(value){
        if(this.ele.length == 4 ){
            console.log("max size exeeded");
     
        }else{
            this.ele.push(value);
            this.top++
        }
      
    }

    print(){
        console.log(this.ele);
    }
    getTop(){
        console.log(this.top)
    }

    pop(){
        if(this.ele.length == 0){
            console.log("array is empty");
        }else{
            this.ele.pop();
            this.top--;
        }
    }
}

let stack1 = new stack(4);
stack1.push(10);
stack1.push(20);
stack1.push(55);
stack1.push(66);
stack1.push(66);
stack1.print();
