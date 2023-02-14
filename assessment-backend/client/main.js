
const errCallback = err => console.log(err.response.data)


const fortuneBtn = document.getElementById("fortuneButton")
const experiment = document.getElementById("tryNew")
const newLife = document.getElementById("newMe")
const motivSpeaker = document.getElementById("myBtn")
const goalsText = document.getElementById("goal")
const btnDelete = document.getElementById("del")

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


const yourGoals = (e) => {
  e.preventDefault();
  const goalsValue = goalsText.value
  axios.post("http://localhost:4000/api/update", {goalsValue}).then(res => {
    const {status }= res;
    if (status === 200 ) {
     alert("Nice, you're goal was added!")
    } else {
      alert("something went wrong")
      console.error(`Status code ${status} was thrown`)
    }
 });
};
newLife.addEventListener('click', yourGoals)

const youDelete = () => {
    axios.delete(`http://localhost:4000/api/fortune/update/${id}`)
    .then(res => {
        console.log(res.data)
    });

btnDelete.addEventListener("click", youDelete)

}