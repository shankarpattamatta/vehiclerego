 ///<reference types="cypress" />

const vehicleRegistration = require("./VehicleRegistration").default

//This class defines the rendering of all the RegoPage objects used in testing
//Separating page elements from test cases helps us to follow DRY principle and improves code maintenance.

class CheckRegistration {

    getTagLine=()=>{
        return cy.get('p._tagline')     //cy.get takes in a CSSselector and allows various actions on the object
    }
    clickGetStartedButton=()=>{
                          
        cy.get('div.button-holder>a')
            .contains('Get started').click()
     return vehicleRegistration
    }
    
   

}
module.exports = new CheckRegistration();