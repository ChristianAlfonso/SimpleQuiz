const quiz = () => {

    let btn = document.querySelector('button');
    let input = document.querySelectorAll('input');
    let totalScore = document.querySelector('label');
    let score = 0;

    for (let theUserInput of input) {

        input[0].addEventListener('input', ()=>{
            input[0].value = input[0].value.slice(0,1)
        })

        input[1].addEventListener('input', ()=>{
            input[1].value = input[1].value.slice(0,1)
        })

        input[2].addEventListener('input', ()=>{
            input[2].value = input[2].value.slice(0,1)
        })

        input[3].addEventListener('input', ()=>{
            input[3].value = input[3].value.slice(0,1)
        })

        input[4].addEventListener('input', ()=>{
            input[4].value = input[4].value.slice(0,1)
        })
    }

    btn.addEventListener('click', ()=> {

        switch (input[0].value) {
            case 'b':
            case 'B':
                console.log('Number 1 correct!');
                score++;
                break;
            case 'a':
            case 'A':
            case 'c':
            case 'C':
            case 'd':
            case 'D':
                console.log(`Number 1, Incorrect the answer is b`) ;  
                break;
            default:
                console.log('invalid answer means wrong')
                break;
        }

        switch (input[1].value) {
            case 'b':
            case 'B':
                console.log('Number 2 correct!');
                score++;
                break;
            case 'a':
            case 'A':
            case 'c':
            case 'C':
            case 'd':
            case 'D':
                console.log(`Number 2, Incorrect the answer is b`) ; 
                break; 
            default:
                console.log('invalid answer means wrong')
                break;
        }

        switch (input[2].value) {
            case 'b':
            case 'B':
                console.log('Number 3 correct!');
                score++;
                break;
            case 'a':
            case 'A':
            case 'c':
            case 'C':
            case 'd':
            case 'D':
                console.log(`Number 3, Incorrect the answer is b`) ; 
                break; 
            default:
                console.log('invalid answer means wrong')
                break;
        }

        switch (input[3].value) {
            case 'd':
            case 'D':
                console.log('Number 4 correct!');
                score++;
                break;
            case 'a':
            case 'A':
            case 'c':
            case 'C':
            case 'b':
            case 'B':
                console.log(`Number 4, Incorrect the answer is d`) ;
                break;  
            default:
                console.log('invalid answer means wrong')
                break;
        }

        switch (input[4].value) {
            case 'A':
            case 'a':
                console.log('Number 5 correct!');
                score++;
                break;
            case 'B':
            case 'b':
            case 'c':
            case 'C':
            case 'd':
            case 'D':
                console.log(`Number 5, Incorrect the answer is a`);
                break;  
            default:
                console.log('invalid answer means wrong')
                break;
        }

        totalScore.textContent = `Your Score is ${score}`

    })
}
quiz();