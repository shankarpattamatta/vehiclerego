//This page will have all the page objects related to vehicle registration page.
import vehicleReview from '../pageobjects/VehicleReview';

class VehicleRegistration{
    regoId=null;
   
   launchVehicleRegoPage =()=>{
    cy.visit('https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration/vehicle')
   }
   
   setVehicleType=(vehicleType)=>{
    switch (vehicleType) {
        case 'Car/truck':
            this.regoId='rego-number'
            return cy.get('ul[aria-labelledby="SelectedVehicleType"]>:nth-child(1)').click()
        case 'Motorcycle':
            this.regoId='rego-number-motorcycle'
            return cy.get('ul[aria-labelledby="SelectedVehicleType"]>:nth-child(2)').click()
        case 'Caravan/trailer':
            this.regoId='rego-number-caravan'
            return cy.get('ul[aria-labelledby="SelectedVehicleType"]>:nth-child(3)').click()
        default:
            this.regoId='rego-number'
            return cy.get('ul[aria-labelledby="SelectedVehicleType"]>:nth-child(1)').click()
    }
  }

  setVehicleRegoNumber=(regoNumber)=>{
      let idPattern =`input#${this.regoId}`
      return cy.get(idPattern).type(regoNumber,{timeout:5*1000})
  }

   clickContinueButton=()=>{
        cy.get('button[type="submit"]').click()
        return vehicleReview;
   }

   getFormTitle=()=>{
       return cy.get('h2.form-title')
   }

   getErrorMessage=()=>{
       return cy.get('.form-summary')
   }
}
 export default new VehicleRegistration()