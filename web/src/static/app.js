
var AppViewModel = function() {
    var self = this;
    self.socket = io();

    self.hello = ko.observable("Hello World");

    self.send = () => {
      self.socket.emit('custom-message', {this:"is a test"})
    }
}

ko.applyBindings(new AppViewModel());
