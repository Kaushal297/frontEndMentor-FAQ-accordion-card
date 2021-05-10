const arrows = document.querySelectorAll('.arrow');

arrows.forEach((item) => {
    var answers = item.parentElement.nextElementSibling;
    var itemSiblingElement = item.previousElementSibling;
    item.addEventListener('click', ()=>{
        var containsClass = item.classList.contains('arrow-up');
        if(containsClass == true ){
            item.classList.remove('arrow-up');
            answers.classList.add('d-none');
            answers.classList.remove('display');
            itemSiblingElement.classList.remove('font-bold');
        }else{
            item.classList.add('arrow-up');
            answers.classList.remove('d-none');
            answers.classList.add('display');
            itemSiblingElement.classList.add('font-bold');
        }
    })
})