var EventEmitter = require('events').EventEmitter;
var io = require('socket.io-client');

/**
 * Inherits from EventEmitter.
 */

Network.prototype.__proto__ = EventEmitter.prototype;

function Network() {
  this.socket = io('http://localhost:3000/game');
  this.socket.on('player:sync', function(motion) { this.emit('sync', motion); }.bind(this));
}

Network.prototype.join = function(userData, roomData) {
  this.socket.emit('join', { userData: userData, roomData: roomData });
};

Network.prototype.sendPlayerData = function(data) {
  this.socket.emit('player:sync', data);
};

module.exports = Network;
