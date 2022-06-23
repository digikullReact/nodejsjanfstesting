const app=require("../app");
const request = require('supertest');




describe('Testing Get Api',function(){


    // This is used for asynchronous testing 
    it("It should return the response 200", (done) => {
      request(app).
          get("/api")
          
          .expect(200) //jest 
          .expect('Content-Type', /json/)
          .then(response => {
            expect(response.body.message).toBe( 'Success')
            expect(response.body.data).toEqual(expect.any(Array))
            done();
            
        }) .catch(err => done(err))
          
  
  });
  
  
  })