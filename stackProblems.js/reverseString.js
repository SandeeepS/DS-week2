class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack{
    constructor(size){
        this.head = null;
        this.tail = null;
        this.size = size;
        this.currentLength = 0;
    }


    isEmpty(){
        return this.currentLength === 0;
    }

    isFull(){
        return this.currentLength === this.size;
    }

    push(value){
        const node = new Node(value);
       
                if(this.size == 0 ){
                    this.head = node;
                    this.tail = node;
                   
                }else{
                    node.next = this.head;
                    this.head = node;
                }
                
                this.currentLength++
                console.log(this.currentLength);
        
          
       
    }
    pop(){
        if(this.size == 0){
            return ;
        }else{
            let popedElement = this.head.value;
            let prev = this.head;
            prev = this.head.next;
            this.head.next = null;
            this.head = prev;
            this.currentLength--
            return popedElement;
            
        }
       
    }

    // reverse(){
    //     let reversedString = [];
    //     while(this.currentLength > 0){
    //         let poppedNode = this.head;
    //         this.head = this.head.next;
    //         this.currentLength--;
    //         reversedString.unshift(poppedNode.value)
    //     }

    //     this.head = null;
    //     this.tail = null;
    //     return reversedString.join("");

    // }

    reverse(){
        let stack2 = new stack();
        while(this.currentLength > 0){
            const popedElement = stack1.pop();
            stack2.push(popedElement);
        }
        console.log("stack 2 is")
        stack2.print();
    }
    print(){
        if(this.size == 0 ){
            console.log("the stack is empty");
        }else{
            let curr = this.head;
            let stackValues = '';
            while(curr){
                stackValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(stackValues);
        }
    }
    peek(){
        console.log(this.head.value);
    }
    getTail(){
        console.log(this.tail.value);
    }

}

const stack1 = new stack(5);
stack1.push("s");
stack1.push("a");
stack1.push("n");
stack1.push("d");
stack1.push("e");
stack1.push("e");
stack1.push("p");

stack1.print();
stack1.reverse();