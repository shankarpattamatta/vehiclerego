import regoPage from '../pageobjects/CheckRegistration'
import vehicleRegistration from '../pageobjects/VehicleRegistration'
import vehicleReview from '../pageobjects/VehicleReview'
const vehiclesummaryData= require('../../fixtures/vehiclesummary.json')
///<reference types="cypress" /> 

//describe block is used for grouping a suit of test cases specified in respective 'it' blocks
describe('TS01_VehicleRegistrationPage', () => {
    let testdata;
    beforeEach(() => {

        cy.visit('https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration')
        cy.fixture('vehicledetails').then((vdata) => {                         //Fixtures are used to drive the testdata from fixtures folder
            testdata = vdata
            return testdata;
        })
    })

    it('TC01_ValidateLaunchHomePage', () => {
        regoPage.getTagLine()
            .should('contain.text', 'Check the Victorian registration details')  //Assertions are created using should that'd appear in logging.
    })

    it('TC02_ValidateGetStartedButton', () => {
        const vehicleRegistration = regoPage.clickGetStartedButton()
        vehicleRegistration.getFormTitle().should('have.text', 'Enter vehicle details')
    })



    it('TC03_FindVehicleRego', () => {
        const vehicleRegistration = regoPage.clickGetStartedButton()
        vehicleRegistration.getFormTitle().should('have.text', 'Enter vehicle details')
        vehicleRegistration.setVehicleType(testdata.vtype1)                            //The test data can be used in a similar way
        vehicleRegistration.setVehicleRegoNumber(testdata.vtype1_regoNumber)
        const vehicleReview = vehicleRegistration.clickContinueButton();
        vehicleReview.getURL().should('contain', '/check-registration/vehicle/Review')
    })

    vehiclesummaryData.forEach((jsonRecord) => {                                        //Loop through the json file to test different combinations of data.
        it('TC04_FindVehicleRego+DataDrivenTestCase', () => {
            const vehicleRegistration = regoPage.clickGetStartedButton()
            vehicleRegistration.getFormTitle().should('have.text', 'Enter vehicle details')
            vehicleRegistration.setVehicleType(jsonRecord.vtype)
            vehicleRegistration.setVehicleRegoNumber(jsonRecord.vtype_regoNumber)
            const vehicleReview = vehicleRegistration.clickContinueButton();
           // vehicleRegistration.getErrorMessage().should('not.contain.text', `That number doesn't look right`) //Negative assertions to help simulate a test data issue or any application error.
            vehicleReview.getURL().should('contain', '/check-registration/vehicle/Review') //This would fail for motorcycle and caravan due to data issue.
        })
    })
})