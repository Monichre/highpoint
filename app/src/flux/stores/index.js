import { EventEmitter } from "events";
import _ from "lodash";

export default _.extend({}, EventEmitter.prototype, {
  data: {
    ready: false,
    pages: [],
    properties: [],
    processes: [],
    redrawLines: false,
    galleryItems: [],
    activePropertyCard: 0
  },
  emitChange: function() {
    this.emit("change");
  },
  addChangeListener: function(callback) {
    this.on("change", callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener("change", callback);
  }
});
