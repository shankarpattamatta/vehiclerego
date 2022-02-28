 ///<reference types="cypress" />
 class VehicleReview{
    getURL = ()=>{
        return cy.url()
    }
    getRegistrationReport=()=>{
        return cy.get('a.link-item').click();
    }


 }

 export default new VehicleReview()