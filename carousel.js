const buttons=document.querySelectorAll('.carousel__button');
const items=document.querySelectorAll('.carousel__item');

//initially add class to item & button when no button is selcted
items[0].classList.add('carousel__item--selected');
buttons[0].classList.add('carousel__button--selected');

// as we selcet the button
buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        //unselect all the items
        items.forEach(item=>item.classList.remove('carousel__item--selected'));
        buttons.forEach(button=>button.classList.remove('carousel__button--selected'));
        //select that particular item
        items[i].classList.add('carousel__item--selected');
        button.classList.add('carousel__button--selected');
    });
});