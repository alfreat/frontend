// 

var bellBoy1 = {
    name: "alex",
    gender: "male",
    experience: 3,
    laguages: ["Hindi","English","Tamil"]
        
};
console.log(bellBoy1.name);

function BellBoy(name,gender,experience,languages){
    this.name = name;
    this.gender = gender;
    this.experience = experience;
    this.languages = languages;
}

var bellboy103 = new BellBoy("tushar","male",3,["Hindi","Japanese"]);

