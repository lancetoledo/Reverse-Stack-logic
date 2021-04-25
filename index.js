// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Create modified stack class

class Stack {
  constructor(name) {
    this.name = name;
    this.data = [];
    this.top = 0;
  }

  push(element) {
    // this.data.unshift(element)

    //Now try with array functions
    for (let i = this.data.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = element;
    return this.data;
  }

  pop() {
    // this.top--;
    // return this.data.shift();
    //Code below how you would do this without array funcitons
    return this.data.splice(0, 1);
  }

  peek() {
    return this.data[this.top - 1];
  }

  length() {
    return this.top;
  }

  print(element) {
    console.log(element);
  }

  isEmpty() {
    return this.top == 0;
  }
}

let test = new Stack("Lance's stack");

test.print(test.push("You"));
test.print(test.push("Me"));
test.print(test.pop());
test.print(test.data);
