var user = { name: "John", age: 34, hobby: "Soccor", IsMarried: false };
user.FavFood = "Spinach";

var todos = [
    "Clean Room",
    "Brush Teeths",
    "Excercise",
    "Study",
    "eat healthy"
];

var todosLength = todos.length;
for (var i = 0; i < todosLength;i++)
{
    console.log(todos[i], i);
    
}

todos.forEach(function (todo, i) {
    console.log(todo,i)
})

function thisIsFunction() {

}

var obj = {
    thisIsMethod: function() {

    }
}