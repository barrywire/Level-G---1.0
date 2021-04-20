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

   //DailyMotion integration
   //Went the iframe way instead

   //Medium API
   fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joshuabgad')
      .then((res) => res.json())
      .then((data) => {
         // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
         const res = data.items //This is an array with the content. No feed, no info about author etc..
         const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

         // Functions to create a short text out of whole blog's content
         function toText(node) 
         {
            let tag = document.createElement('div')
            tag.innerHTML = node
            node = tag.innerText
            return node
         }
         function shortenText(text,startingPoint ,maxLength) 
         {
            return text.length > maxLength?
            text.slice(startingPoint, maxLength):
            text
         }

         // Put things in right spots of markup
         let output = '';
         posts.forEach((item) => {
            output += `
            <li class="blog__post">
               <a href="${item.link}">
                  <img src="${item.thumbnail}" class="blog__topImg"></img>
                  <div class="blog__content">
                     <div class="blog_preview">
                        <h2 class="blog__title">${shortenText(item.title, 0, 70)}</h2>
                        <p class="blog__intro">${shortenText(toText(item.content),0, 300)}</p>
                     </div>
                     <hr>
                     <div class="blog__info">
                        <span class="blog__author">${item.author}</span>
                        <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
                     </div>
                  </div>
               <a/>
            </li>`

         })
         document.querySelector('.blog__slider').innerHTML = output
   })
});
