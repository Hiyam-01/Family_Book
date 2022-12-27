var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Hiyam Jain", "Jitendra jain", "Gaurav jain ", "Swati jain ", "Jyoti Jain"];
var x = 0;
function NextImage()
{
    x=x+1;
    var family_member_count = 5
    if(x > family_member_count)
      {
          x = 0;
      }
    
    
    var dimage = images[x];   
    var dname = names[x] ;
 
    document.getElementById("_image").src = dimage;
    document.getElementById("_name").innerHTML = dname;
}
