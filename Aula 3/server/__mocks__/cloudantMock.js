var mockCloudant = require('mock-cloudant');
var MockCouch = mockCloudant.MockCouch; 

class CloudantMock {

  /** @member {MockCouch} CloudantMock  cloudantMockServer */

  start () {
    this.cloudantMockServer = mockCloudant.createServer();
    this.cloudantMockServer.listen(1337);
    this.cloudantMockServer.addDB('documents');
  }

  stop () {
    this.cloudantMockServer && this.cloudantMockServer.close();
  }
}

module.exports = CloudantMock;