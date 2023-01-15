
module.exports = {

     getFortune: (req, res) => {
         const fortunes = ["Accept something that you cannot change, and you will feel better", "All will go well with your new project", "It takes courage to admit fault", "Miles are covered one step at a time", "Your life will be happy and peaceful"];

         let randomList = Math.floor(Math.random() * fortunes.length);
         let randomFortune = fortunes[randomList];

         res.status(200).send(randomFortune);
     },

    somethingNew: (req, res) => {
        const brandNew = ["Take a 5 min walk today","Go say hi to one random stranger","Give a compliment to someone", "Serve food at a food kitchen","Try a new food"]
        
        let randomAry = Math.floor(Math.random() * brandNew.length);
        let randomPicker = brandNew[randomAry]
        res.status(200).send(randomPicker)
        
    },
    goodSpeakers: (req, res) => {
        const speakers = [
            `Name: Dave Ramsey, Website: ${href= 'https://www.ramseysolutions.com/'}`,
            `Name: Tony Robbins, Website: ${href= 'https://www.tonyrobbins.com/'}`,
            `Name: Nick Vujicic, Website: ${href= 'https://nickvujicic.com/'}`,
            `name: Eckhart Tolle, Website: ${href= 'https://eckharttolle.com/'}`,
            `Name: Louise Hay, Website: ${href= 'https://www.louisehay.com/'}`,
        ]
        
        let randomSpeaker = Math.floor(Math.random() * speakers.length);
        let randomSpk = speakers[randomSpeaker]
        res.status(200).send(randomSpk)
    },
    
    yourGoals: (req, res) => {
        console.log(req.body)
        res.status(200).send("Submitted, You're a baller!")
    },


}