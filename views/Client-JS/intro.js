
// $(document).ready(repeatIntro);




// var fancyText = document.getElementById("fancy");

// const text= ["Fast Development","Beautiful UIs","Native Performance","creativity at its best","Design And Develop","Hot Reload"]
// var totalOption = text.length;
// var option = -1;

// setInterval(repeatIntro, 4000);

// function randomColor() {
//     return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(8)).substr(-6);
// }

// function repeatIntro()
// {
//     option = (option+1)%totalOption;
//     var splitText = text[option].split("");
//     console.log(splitText);
//     fancyText.innerHTML = "";
//     for(i=0;i<splitText.length;i++)
//     {
//         fancyText.innerHTML += `<span><pre style="color:`+randomColor()+`  ";>`+splitText[i]+`</pre></span>`
//     }
//     var char = 0;
//     let timer = setInterval(()=>{
        
//         const span = fancyText.querySelectorAll('span')[char];
//         try {
//             span.classList.add('fade');
//         } catch (error) {
            
//         }
//         char++;
//         if(char==splitText.length){
//             complete();
//             return;
//         }
            
//     },50);

//     function complete()
//     {
//         clearInterval(timer);
//         timer = null;
//     }

// }

