
const express= require("express");
const bodyParser= require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var newTasks=[];
app.set("view engine","ejs");
app.get("/",(req,res)=>{
			var today= new Date();
			var option={
				weekday:"long",
				day:"numeric",
				month:"long"
			};
			var currentDay= today.getDay()
			
			var day=today.toLocaleString("en-NG",option);
			
			

			res.render("list",{
					kindofDay: day,
					addNewTasks:newTasks
				})
});
app.post("/",(req,res)=>{
	var newTask= req.body.task;
	newTasks.push(newTask);
	res.redirect("/")
});


app.listen(process.env.PORT || 3000,()=>{
	console.log("server is working");
});
