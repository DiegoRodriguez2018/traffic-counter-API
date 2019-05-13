const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Traffic Counter', () => {
  describe('/', () => {
    it('should GET a response with APIs property', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('APIs');
          done();
        });
    });
  });

  describe('/API-1', () => {
    it('should GET a response with endpoints property', done => {
      chai
        .request(server)
        .get('/API-1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('endpoints');
          done();
        });
    });

    describe('/API-1/total-count', () => {
      it('should GET a response with total count property', done => {
        chai
          .request(server)
          .get('/API-1/total-count')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.have.property('totalCount');
            done();
          });
      });
    });

    describe('/API-1/count-per-day', () => {
      it('should GET a response with carsPerDay property', done => {
        chai
          .request(server)
          .get('/API-1/count-per-day')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.have.property('countPerDay');
            done();
          });
      });
    });

    describe('/API-1/top-half-hour-periods', () => {
      it('should GET a response with topThreeHalfHourPeriods property', done => {
        chai
          .request(server)
          .get('/API-1/top-half-hour-periods')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.have.property('topThreeHalfHourPeriods');
            done();
          });
      });
    });

    describe('/API-1/bottom-hour-and-a-half-periods', () => {
      it('should GET a response with bottomHourAndAHalfPeriods property', done => {
        chai
          .request(server)
          .get('/API-1/bottom-hour-and-a-half-periods')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.should.have.property('bottomHourAndAHalfPeriods');
            done();
          });
      });
    });
  });

  describe('/API-2', () => {
    it('should GET a response with dataSource, totalCount, countPerDay,  topHalfHourPeriods, bottomHourAndAHalfPeriods and calculatedAt properties', done => {
      chai
        .request(server)
        .get('/API-2')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('dataSource').and.to.be.a('string');
          res.body.data.should.have.property('totalCount').and.to.be.a('string');;
          res.body.data.should.have.property('countPerDay').and.to.be.a('array');;
          res.body.data.should.have.property('topHalfHourPeriods').and.to.be.a('array');;
          res.body.data.should.have.property('bottomHourAndAHalfPeriods').and.to.be.a('array');;
          res.body.data.should.have.property('calculatedAt').and.to.be.a('string');;
          done();
        });
    });
  });

});
