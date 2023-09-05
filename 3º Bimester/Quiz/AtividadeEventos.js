const btns = document.querySelectorAll('.submit-button');
const questions = document.querySelectorAll('.question');

questions[0].style.display = "block";

btns.forEach((btn, index) => {
    if (index != 0) {
        btn.disabled = true
    }
    btn.addEventListener('click', () => {
        if (index === 0) {
            let option = document.querySelector('input[value="javascript"]');
            if (option.checked) {
                let spanCorrect = document.querySelectorAll('.correct')[index];
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanCorrect.style.display = 'block';
                spanIncorrect.style.display = 'none';
                btn.disabled = true
                btns[index + 1].disabled = false;
                questions[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q1\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanIncorrect.style.display = 'block'
            }
        }

        if (index === 1) {
            let option = document.querySelector('input[value="gabriel"]');
            if (option.checked) {
                let spanCorrect = document.querySelectorAll('.correct')[index];
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanCorrect.style.display = 'block';
                spanIncorrect.style.display = 'none';
                btn.disabled = true
                btns[index + 1].disabled = false;
                questions[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q2\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanIncorrect.style.display = 'block'
            }
        }

        if (index === 2) {
            let option = document.querySelector('input[value="java"]');
            if (option.checked) {
                let spanCorrect = document.querySelectorAll('.correct')[index];
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanCorrect.style.display = 'block';
                spanIncorrect.style.display = 'none';
                btn.disabled = true
                btns[index + 1].disabled = false;
                questions[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q3\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanIncorrect.style.display = 'block'
            }
        }

        if (index === 3) {
            let option = document.querySelector('input[value="barueri"]');
            if (option.checked) {
                let spanCorrect = document.querySelectorAll('.correct')[index];
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanCorrect.style.display = 'block';
                spanIncorrect.style.display = 'none';
                btn.disabled = true
                btns[index + 1].disabled = false;
                questions[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q4\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanIncorrect.style.display = 'block'
            }
        }

        if (index === 4) {
            let option = document.querySelector('input[value="italia"]');
            if (option.checked) {
                let spanCorrect = document.querySelectorAll('.correct')[index];
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanCorrect.style.display = 'block';
                spanIncorrect.style.display = 'none';
                btn.disabled = true
                btns[index + 1].disabled = false;
                questions[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q5\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorrect = document.querySelectorAll('.incorrect')[index];
                spanIncorrect.style.display = 'block'
            }
        }
    }
    );
})