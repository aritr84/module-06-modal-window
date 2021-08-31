'use strict';

//declaring query variables before hand
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);

//creating a openModal function ---
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//creating a closeModal function ---
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//on pressing the btns modal window will appear or in other words the "hidden" class will be removed
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

//on pressing the close btn or the overlay area modal window will close or in other words the "hidden" class will be added again to overlay and modal window.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//on pressing the esc key the modal window will close or 'hidden' class will be added
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
notes -------
----------------------------------
In case of multiple elements with same calsses querySelector('.class-name') will only select the 1st element
to solve this problem we can by using querySelectorAll('.class-name')
it returns a array called node-list and we can traverse through the list using loop.


NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
0: button.show-modal
1: button.show-modal
2: button.show-modal
length: 3
[[Prototype]]: NodeList
------------------------------------
*/

/*
------------------------------------------
key press events --
they are global events -- they donot happen on the one specific element
they usually listen on the whole document
/*
to look into the event we need to give a parameter to the event handler function 
example -- 
document.addEventListener('keydown', function (e) {
//   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
  }
}

here e is the object that js generates
of keyboard event

the value that which key is pressed is stored in 'key'
to access it --  objectName.key -- returns a string.
-----------------------------
*/

/*
-----------------------------
to check if the any class is present or not
we use 
query.classList.contains('className')

to remove a class ---
query.classList.remove('className')

to add a class ----
query.classList.add('className')
*/
