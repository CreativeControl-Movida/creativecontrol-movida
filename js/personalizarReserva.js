const boxes = document.getElementsByClassName('box-option');

console.log(boxes);

// boxes[0].addEventListener('onclick', function() {
//    alert('asdaksdkad');
// });

for (let i = 0; i < boxes.length; i++) {
    
    boxes[i].onclick = (e) =>{
        
        if(boxes[i].classList.contains('is-active')){
            boxes[i].classList.remove("is-active");
            console.log(boxes[i].classList.value)
        }else{

            boxes[i].classList.add("is-active");
            console.log(boxes[i].classList.value)
        }

        

    }
}