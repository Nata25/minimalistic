import './style.css';

class Greeting {
  static sayHello(): void {
    console.log('hello brave new world!!!!!');
  }

  static arrow = () => {
    console.log('from arrow func');
  }
}

Greeting.sayHello();
Greeting.arrow();