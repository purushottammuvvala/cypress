import myAccount from "../support/pageObject/demoqa/myAccount";
import login from "../support/pageObject/demoqa/login";
import checkout from "../support/pageObject/demoqa/checkout.";
///<reference types="Cypress"/>


describe('demoqa', () => {
    beforeEach(() => {
        cy.fixture('example').then(function(data)
        {
            globalThis.data = data
        })
        cy.session('login',() =>{
            logIn.visit()
        logIn.My_Account()
        logIn.details_username(data.Demoqa_username)
        logIn.details_password(data.Demoqa_password)
        logIn.details_login()
        logIn.details_assert(data.Demoqa_username)
        })
        
    });

    const myAc=new myAccount()
    const logIn=new login()
    const check_out=new checkout()

    it.skip('demo', () => {
        logIn.visit()
        myAc.My_Account()
         myAc.reg_username(data.Demoqa_username)
         myAc.reg_email(data.Demoqa_email)
         myAc.reg_password(data.Demoqa_password)
         myAc.reg_registerBTn()
        
    }); 
    // it.skip('demoLog', () => {
    //     logIn.visit()
    //     logIn.My_Account()
    //     logIn.details_username(data.Demoqa_username)
    //     logIn.details_password(data.Demoqa_password)
    //     logIn.details_login()
    //     logIn.details_assert(data.Demoqa_username)
        
    // }); 
    it.skip('', () => {
        logIn.visit()
        myAc.search()
        myAc.searchText()
        myAc.selectProduct()
    });

    it('checkout', () => {
        logIn.visit()
        check_out.click_chekout()
        check_out.fill_form_name()
    });
    });
