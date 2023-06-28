
let questionTitle = document.getElementsByClassName('question__title');


for (i=0; i<questionTitle.length;i++){
    questionTitle[i].addEventListener('click', function(){
        this.classList.toggle('activa');
        let question__paragraph = this.nextElementSibling;
        let arrow = this.firstChild.nextElementSibling
        
        
        if(question__paragraph.style.display === "block"){
            question__paragraph.style.display = "none";
            arrow.classList.remove('arrow_up');  
        }else{
            question__paragraph.style.display = "block"; 
           arrow.classList.add('arrow_up');
        }    
        
    })
}



