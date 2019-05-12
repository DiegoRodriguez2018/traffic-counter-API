const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Traffic Counter', ()=>{
  describe('/test', ()=>{
    it('should GET a success message', done =>{
      chai.request(server)
      .get('/test')
      .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.have.property("message").eql("API is working");
        done();
      });
    })
  })
});