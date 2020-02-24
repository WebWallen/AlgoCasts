// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    // Object of arrays that hold every events' callbacks
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    // If we already have events inside the associated array...
    if (this.events[eventName]) {
      // Push this callback inside the [event name]'s events list
      this.events[eventName].push(callback);
      // Otherwise (first entry inside the event name's array)...
    } else {
      // Assign the [callback] as first index of [array]
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      // For each callback function associated with this event key...
      for (let cb of this.events[eventName]) {
        // Call the function
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // Removes entire property from the object
    delete this.events[eventName];
  }
}

module.exports = Events;
