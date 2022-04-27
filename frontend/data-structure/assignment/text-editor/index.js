module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.redoStack = []
        this.undoStack = []
    }

    write(c) {
        // TODO: answer here
        this.undoStack.push(c)
    }

    read() {
        // TODO: answer here
        var result = '';
        for (var i = 0; i < this.undoStack.length; i++) {
            result += this.undoStack[i]
        }
        return result;
    }

    undo() {
        // TODO: answer here
        if (this.undoStack.length < 0) {
            this.redoStack.push(this.undoStack.pop())
        }
    }
    
    redo() {
        // TODO: answer here
        if (this.redoStack.length > 0) {
            this.undoStack.push(this.redoStack.pop())
        }
    }
}
