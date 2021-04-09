// Make the big small picture big then small when loaded and ideally clicked by the user
document.addEventListener("DOMContentLoaded", function(event)
{
    var thumbnailElement = document.getElementById("smart_thumbnail");
    var commentElement =document.getElementById("onImgClick");
    thumbnailElement.addEventListener("click", function()
    {
        thumbnailElement = document.getElementById("smart_thumbnail");
        thumbnailElement.className = "";
        
        if (thumbnailElement.className == "") 
        {
        commentElement.innerHTML = "You have clicked the image and seen the future. A future that is possible to occur when we unite to form an indubitable gaming community. Please click the photo again";
        thumbnailElement.addEventListener("click", function()
        {
            thumbnailElement.className = "small";
        });        
        } else 
        {
        commentElement.innerHTML = "You can click the image to see the future";     
        }
        
    })
    
})
//Disqus Comment section addition
var disqus_config = function () {
    this.page.url = 'http://3.238.26.75' ;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://level-g.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();