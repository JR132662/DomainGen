
let GenerateDomain = () => {

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let doms = [".com",".net",".org"]


pronouns.forEach((pronoun)=>{
    adjs.forEach((adj)=>{
            nouns.forEach((noun)=>{
                doms.forEach((dom)=>{
                    console.log(pronoun+adj+noun+dom)
                })
            })
    })
})
}
GenerateDomain()