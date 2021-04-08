'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal.length);

// for(let i = 0; i < btnsOpenModal.length; i++){
//     console.log('Button clickedclickedclicked');
//     btnsOpenModal[i].addEventListener
//         ('click', function(){
//             console.log('Button clicked');
//             modal.classList.remove('hidden');
            // overlay.classList.remove('hidden');
//         });
//     }
btnsOpenModal.forEach(el => {
    el.addEventListener('click', openModal=>{
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // modal.getElementsByClassName.display=block;
    });
  });
  const closeModal = function(){
    modal.classList.add('hidden');  
    overlay.classList.add('hidden');
   }  
  btnCloseModal.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e){
      console.log( e,'-->A key was pressed=>', e.key);
      if(e.key==='Escape' && !modal.classList.contains('hidden')){
            closeModal();
          
      }

  });
