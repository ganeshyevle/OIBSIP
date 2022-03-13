let DIS = document.getElementById('DIS');

let buts = Array.from(document.getElementsByClassName('but'));

buts.map( but => {
    but.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CA':
                DIS.innerText = '';
                break;
            case '=':
                try{
                    DIS.innerText = eval(DIS.innerText);
                } catch {
                    DIS.innerText = "Error"
                }
                break;
            case '←':
                if (DIS.innerText){
                DIS.innerText = DIS.innerText.slice(0, -1);
                }
                break;
            default:
                DIS.innerText += e.target.innerText;
        }
    });
});