
let questionTitle = document.getElementsByClassName('question__title');
let arrow = document.querySelector('.arrow');

for (i=0; i<questionTitle.length;i++){
    questionTitle[i].addEventListener('click', function(){
        this.classList.toggle('activa');
        let question__paragraph = this.nextElementSibling;
        
        
        if(question__paragraph.style.display === "block"){
            question__paragraph.style.display = "none";
            
            arrow.classList.remove('arrow_up');
           // arrow.forEach((i) => i.classList.remove('arrow_up'));
            
        }else{
            question__paragraph.style.display = "block"; 
        
           arrow.classList.add('arrow_up');
          // arrow.forEach((i) => i.classList.add('arrow_up'));
        } 
      
            
        
    })
}

