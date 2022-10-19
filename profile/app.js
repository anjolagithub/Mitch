//How to divide a page into two html?
<!DOCTYPE html>
<html>
<head>
<style> 
.flex-container{
display: -webkit-flex;
display: flex;
width: 1100px;
height: 550px;
background-color: lightgrey;
}

.flex-item {
background-color: white;
margin: 10px;
}

.item1 {
-webkit-flex: 7;
flex: 7;
}

.item2 {
-webkit-flex: 7;
flex: 7;
}

.item3 {
-webkit-flex: 1;
flex: 1;
}
</style>
</head>
<body>

<div class="flex-container">
<div class="flex-item item1">flex item 1</div>
<div class="flex-item item2">flex item 2</div> 
</div>

</body>
</html> 

//how to push a property downwards in html?


