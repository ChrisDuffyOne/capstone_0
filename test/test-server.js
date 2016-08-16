var chai = require('chai');
var chaiHttp = require('chai-http');


global.environment = 'test';
var server = require('../server.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);
describe('Shopping List', function(){
   
   //Basic Test
   it('should list items on GET',function(done){
		chai.request(app)
			.get('/')
			.end(function(error, response){
				should.equal(error, null);
				response.should.have.status(200);
				/*response.should.be.json;
				response.body.should.be.a('array');
				response.body.should.have.length(3);
				response.body[0].should.be.a('object');
				response.body[0].name.should.be.a('string');
				response.body.should.all.have.property('name');
				response.body.should.all.have.property('_id');
				response.body.should.contain.a.thing.with.property('name', 'Tomatoes');
				response.body.should.contain.a.thing.with.property('name', 'Peppers');
				response.body.should.contain.a.thing.with.property('name', 'Broad beans');*/
				done();
			});
	});
});