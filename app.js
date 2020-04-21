const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(app){
      this._courses.appetizers = app;
    },
    set main(mn1){
      this._courses.main = mn1;
    },
    set desserts(dess){
      this._courses.desserts = dess;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        main: this.main,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, name, dishPrice){
      let dish ={
        name,
        dishPrice
      };
     this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      let randIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randIndex];
    },

    generateRandomMeal(){
     let appetizer=this.getRandomDishFromCourse('appetizers');
     let main=this.getRandomDishFromCourse('mains');
      let dessert=this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
    return `Serving ${appetizer.name}, ${main.name}, ${dessert.name}. Total price is $${totalPrice}.`;
    } 
}

menu.addDishToCourse('appetizers', 'Coconut shrimp', 4.30)
menu.addDishToCourse('appetizers', 'Mozzarella Balls', 9.75)
menu.addDishToCourse('appetizers', 'Edamame', 7.00)
menu.addDishToCourse('mains', 'Prime Rib', 18.00),
menu.addDishToCourse('mains', 'CheeseBurger', 14.55)
menu.addDishToCourse('mains', 'Spaghetti', 12.50)
menu.addDishToCourse('desserts', 'Flan', 6.50)
menu.addDishToCourse('desserts', 'Ice Cream', 5.55)

const meal= menu.generateRandomMeal()

console.log(meal)