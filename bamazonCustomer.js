var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,

	user:"root",

	password: "",
	database:"bamazon"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id" + connection.threadId);
	runSearch();
});

function runSearch(){
	inquirer
		.prompt(
		{
			name:"item_id",
			type: "input",
			message: "What is the [item_id] of the product you would like to buy?"
		},
		{
			name:"stock_quantity",
			type:"input",
			message: "How many units of the product would you like to buy?"
			
		}).then(function(answer){
			connection.query("SELECT [item_id] FROM products", function(err, results){
			if(err) throw err;
			// var query = "SELECT * FROM products WHERE ?";
			// connection.query(query, {id: answer.item_id}, function(err,res){
			// 	for(var i = 0; i<res.length; i++){
			// 	console.log("ID:" + res[i].id + " || Product: " + res[i].product_name);
			});
		});
		runSearch();
		
};


		



