//singly list problem 

class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    peek(){
        console.log(this.head.value);
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
             this.head = node;
        }else{
            let prev = this.head;
            while(prev && prev.next != null){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size ++;
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty");
            return;
        }
        let prev = this.head;
        let element = '';
        while(prev){
            element += `${prev.value} `;
            prev = prev.next;
        }
        console.log(element);
    }

    removeByValue(value){
        if(this.isEmpty()){
            console.log("the list is empty");
            return ;
        }
        
        if(this.head.value == value){
            console.log(0);
        }else{
            let prev = this.head;
            let i = 0;
            while(prev){
                if(prev.value == value){
                    console.log(i)
                }
                prev = prev.next;
                i++;
            }
        }
    }
    reverse(){
        if(this.isEmpty()){
            return ;
        }else{
            let reversed = '';
            let curr = this.head;
            while(curr){
                reversed = curr.value + reversed;
                curr = curr.next;
            }
            console.log(reversed);
        }
    }
}

let linkedList1 = new linkedList();
linkedList1.append("s");
linkedList1.append("a");
linkedList1.append("n");
linkedList1.append("d");
linkedList1.append("e");
linkedList1.append("e");
linkedList1.append("p");

linkedList1.print();
linkedList1.reverse()

