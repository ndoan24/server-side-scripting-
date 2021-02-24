// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.
//require the exports of variables

const essentails = {
    drink: "water",
    eat:"snickers",
    fun: "phone",
    friend: "facebook"

};

const niceToHaves = {
tools: [ "can opener", "flashlight", "matches"],
safety:[ "first aid kit","gloves"],

};


const nonessentials = {
    cookware: "waffleMaker",

}
//module exports is essentially an object that we can add dator

//module.exports written as an object

module.exports = {
    essentials: essentails,
    nicetoHaves: niceToHaves,
    nonessentials: this.nonessentails
};


