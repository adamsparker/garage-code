var list = [
    {
        "name": "0",
        "score": "0",
    },
    {
        "name": "Khasuev Aslam",
        "score": "319",
    },
    {
        "name": "Dadaev Deni",
        "score": "2000",
    },
    {
        "name": "Ulubaev Aslan",
        "score": "74",
    }
]

document.getElementById('G1').innerHTML = list[1].score;
document.getElementById('G2').innerHTML = list[2].score;
document.getElementById('G3').innerHTML = list[3].score;

document.getElementById('G1-P').setAttribute("Data-Value", list[1].score);
document.getElementById('G2-P').setAttribute("Data-Value", list[2].score);
document.getElementById('G3-P').setAttribute("Data-Value", list[3].score);


window.addEventListener('load', function() {

    const section = document.querySelector('#garage-section');
    const sortedDivs = document.createElement('div');
    const divs = [...section.querySelectorAll('.link-archive__inner')];

    divs.sort((a, b) => b.getAttribute('data-value') - a.getAttribute('data-value'));
    divs.forEach(div => {
        sortedDivs.appendChild(div);
    });

    section.appendChild(sortedDivs);
    });