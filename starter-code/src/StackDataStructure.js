function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  } else {
    return false;
  }
}

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
}

StackDataStructure.prototype.push = function(item) {
  this.stackControl.push(item);
  if (this.stackControl.length > this.MAX_SIZE) {
    return 'Stack Overflow';
  } else {
    return this.stackControl;
  }
}

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length == 0) {
    return 'Stack Underflow';
  } else {
    return this.stackControl.pop(this.stackControl[this.stackControl.length - 1]);
  }
}
