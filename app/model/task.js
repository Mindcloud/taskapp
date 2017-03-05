"use strict";
var Task = (function () {
    function Task(content, completed, deleted) {
        this.content = content;
        this.completed = completed;
        this.deleted = deleted;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map