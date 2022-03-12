var images=["https://tv-asahicontents.com/tv-asahi/open/open-tv-program!image?tid=4541&imageNumber=1&sp=true","https://pm1.narvii.com/6356/97342f33c021c319ac161dedeebb1a143dfb282f_hq.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNb8Vk5UPBJyvmHnuzGjAGQfr_2apwMqRtQg&usqp=CAU","https://i.pinimg.com/736x/16/99/70/169970f4c29083a06d76ff887a4d84f0.jpg","https://i.pinimg.com/originals/36/61/34/36613473bed39e16160cf5d19f612996.jpg","https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg"];
var names=["Shin Chan Family Book ","Hiroshi Nohara","Misae Nohara","Shiro Nohara","Himawari Nohara","Shin Chan Nohara"];
var i=0;
function update()
{
    i++;
    var number_of_family_member_in_array=5
    if(i>number_of_family_member_in_array)
    {
        i=0;
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
    
}