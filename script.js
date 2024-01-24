let op1 =0
let op2 =0
let op3 =0
const subBtn = document.getElementById('sub')
subBtn.addEventListener('click',()=>{
    const ans1= document.getElementById('q1')
    const ans2= document.getElementById('q2')
    const ans3= document.getElementById('q3')
    const ans4= document.getElementById('q4')
    const ans5= document.getElementById('q5')
    const ans6= document.getElementById('q6')
    if (ans1.value == 'sleep'){
        op1 += 1
    }
        
    else if (ans1.value == 'run') {
        op2 += 1
    }

    else{
        op3 += 1
    }

    if (ans2.value == 'air'){
        op1 += 1
    }
        
    else if (ans2.value == 'earth') {
        op2 += 1
    }

    else{
        op3 += 1
    }

    if (ans3.value == 'Compassionate'){
        op1 += 1
    }
        
    else if (ans3.value == 'Wise') {
        op2 += 1
    }

    else{
        op3 += 1
    }

    if (ans4.value == 'shrug'){
        op1 += 1
    }
        
    else if (ans4.value == 'walk') {
        op2 += 1
    }

    else{
        op3 += 1
    }

    if (ans5.value == 'laidback'){
        op1 += 1
    }
        
    else if (ans5.value == 'smart') {
        op2 += 1
    }

    else{
        op3 += 1
    }

    if (ans6.value == 'nap'){
        op1 += 1
    }
        
    else if (ans6.value == 'reflect') {
        op2 += 1
    }

    else{
        op3 += 1
    }
    
    if (op1 === op2 === op3){
        window.open('panda.html')
    }

    else if (op1 > op2 && op1 > op3){
        window.open('sheep.html')
    }

    else if( op2 > op1 && op2 > op3){
        window.open('owl.html')
    }

    else if( op3 > op1 && op3 > op2){
        window.open('wolf.html')
    }

    else if( op1 === op2){
        window.open('cat.html')
    }

    else if( op1 === op3){
        window.open('lizard.html')
    }

    else if (op2 === op3){
        window.open('dog.html')
    }
    })


