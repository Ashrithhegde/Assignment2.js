<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment-2</title>
    <style>
   .box {
    background-color: rgb(67, 18, 243);
    height: 500px;
     width : 675px;
     text-align: center;
    }

    </style>
</head>
<body>
    <div id="colour" class="box">
        <h1> LOOK HERE :) </h1></div>
    <button  onclick="fullscreen()"> click me
</button>
<script>
    function fullscreen ()
{
document.querySelector("#colour").style.height="1000px";
document.querySelector("#colour").style.width="1350px";
document.querySelector("#colour").style.backgroundColor="yellow";
}
</script>
</body>
</html>
