let count = 0;


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}






const seats = document.getElementsByClassName('seat');

for(const seat of seats){

    
function setBackgroundColorById(elementId){
        const element = document.getElementById(elementId);
        element.classList.add('bg-green-400');
 }



    seat.addEventListener('click',function(e){
        
        count = count + 1;
        document.getElementById('num').innerText = count;
 


        // const selectedContainer = document.getElementById("notunSeat");

        
        // const seatTable = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[3].innerText;

        // const prothomP = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[3].childNodes[1].innerText;

        // const prothomP1 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[3].childNodes[2].innerText;

        // const prothomP2 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[3].childNodes[2].innerText;

        

        // const li = document.createElement('li');

        // const p = document.createElement('p');
        // p.innerText = prothomP;

        // const p1 = document.createElement('p1');
        // p1.innerText = prothomP1;

        // const p2 = document.createElement('p2');
        // p2.innerText = prothomP2;

        // li.appendChild(p);
        // li.appendChild(p1);
        // li.appendChild(p2);

        // selectedContainer.appendChild(li);


        const totalPrice = document.getElementById('tk').innerText;
        const convertTP = parseInt(totalPrice);
        document.getElementById('tk').innerText = parseInt(totalPrice) + parseInt(550);


        const grandTotal = document.getElementById('final-tk').innerText;
        const convertGT = parseInt(totalPrice);
        document.getElementById('final-tk').innerText = parseInt(totalPrice) + parseInt(550);
        

      


        // const final = taka.innertext;


      } )
}

