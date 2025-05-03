const btnsEl = document.querySelectorAll('.btn');
const faqsEl = document.querySelectorAll('.faq');
const answerEl = document.querySelectorAll('.answer');

function addAnswer(num, btnEl){
  faqsEl.forEach((faqEl, idx)=>{
    if(num === idx){
      if(faqEl.classList.contains('active')){
        faqEl.classList.remove('active');
        btnEl.src = "images/icon-minus.svg";
      } else{
        faqEl.classList.add('active');
        btnEl.src = "images/icon-plus.svg";
      }
      
      
    }
  })
}

btnsEl.forEach((btnEl, idx)=>{
  btnEl.addEventListener('click', ()=>{
    const num = idx
    addAnswer(num, btnEl);
  });
});






