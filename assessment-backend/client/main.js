
const errCallback = err => console.log(err.response.data)


const fortuneBtn = document.getElementById("fortuneButton")
const experiment = document.getElementById("tryNew")
const newLife = document.getElementById("newMe")
const motivSpeaker = document.getElementById("myBtn")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)

const somethingNew = () => {
    axios.get("http://localhost:4000/api/fortune/:id")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

experiment.addEventListener('click', somethingNew)



const goodSpeakers = () => {
    axios.get("http://localhost:4000/api/speaker")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

motivSpeaker.addEventListener('click', goodSpeakers)


const yourGoals = () => {
    axios.post("http://localhost:4000/api/fortune/update")
        .then(res => {
        const data = res.data;
        alert(data);
    });
};
newLife.addEventListener("mouseout", yourGoals)