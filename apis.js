const router=require("express").Router()

const persons=[{
    name:"amir",
    address:"hashemie 72_No8_floor4",
    email:"amir_shahidi2010@yahoo.com",
    phoneNumber:09338664859,
    IQ:129,
    gender:"male",
    dateOuting:"02/10/1375",
    checkApply:"My parents are rich",
    PoliticalPersuasion:"left wing",
    EducationLevelCompleted:"University",
    whyYouWantToDateMyDaughter:"in some way i love your daughter",
    contactDetails:"Please upload contact details for 2 references",
}]

router.get(`/`,(req,res)=>{
    res.send(persons)
})

router.post(`/addPerson`,(req,res)=>{
    const person={
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        IQ:req.body.IQ,
        gender:req.body.gender,
        dateOuting:req.body.dateOuting,
        checkApply:req.body.checkApply,
        PoliticalPersuasion:req.body.PoliticalPersuasion,
        EducationLevelCompleted:req.body.EducationLevelCompleted,
        whyYouWantToDateMyDaughter:req.body.whyYouWantToDateMyDaughter,
        contactDetails:req.body.contactDetails,
    }
    persons.push(person);

    res.send(person)
})

module.exports=router;