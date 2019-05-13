const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Traffic Counter', () => {
  describe('/', () => {
    it('should GET a response with endpoints property', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('endpoints');
          done();
        });
    });
  });

  describe('/total-count', () => {
    it('should GET a response with total count property', done => {
      chai
        .request(server)
        .get('/total-count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('totalCount');
          done();
        });
    });
  });

  describe('/count-per-day', () => {
    it('should GET a response with carsPerDay property', done => {
      chai
        .request(server)
        .get('/count-per-day')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('countPerDay');
          done();
        });
    });
  });

  describe('/top-half-hour-periods', () => {
    it('should GET a response with topThreeHalfHourPeriods property', done => {
      chai
        .request(server)
        .get('/top-half-hour-periods')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('topThreeHalfHourPeriods');
          done();
        });
    });
  });

  describe('/bottom-hour-and-a-half-periods', () => {
    it('should GET a response with bottomHourAndAHalfPeriods property', done => {
      chai
        .request(server)
        .get('/bottom-hour-and-a-half-periods')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('bottomHourAndAHalfPeriods');
          done();
        });
    });
  });

});
