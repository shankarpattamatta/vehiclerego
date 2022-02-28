 ///<reference types="cypress" />
 class VehicleReview{
    getURL = ()=>{
        return cy.url()
    }
    getRegistrationReport=()=>{
        return cy.get('a.link-item').click();
    }


 }

 module.exports= new VehicleReview()