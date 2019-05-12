const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Traffic Counter', () => {
  describe('/test', () => {
    it('should GET a response message', done => {
      chai
        .request(server)
        .get('/test')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('message').eql('API is working');
          done();
        });
    });
  });

  describe('/total-cars', () => {
    it('should GET a response with total count property', done => {
      chai
        .request(server)
        .get('/total-cars')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('totalCount');
          done();
        });
    });
  });

  describe('/cars-per-day', () => {
    it('should GET a response with carsPerDay property', done => {
      chai
        .request(server)
        .get('/cars-per-day')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('carsPerDay');
          done();
        });
    });
  });

  describe('/top-three-half-hour-periods', () => {
    it('should GET a response with topThreeHalfHourPeriods property', done => {
      chai
        .request(server)
        .get('/top-three-half-hour-periods')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('topThreeHalfHourPeriods');
          done();
        });
    });
  });

});
