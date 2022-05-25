// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

module.exports = class Stack {
    constructor() {
        // TODO: answer here
        this.data = []
        this.top = -1
        this.size = 10
    }

    push(size) {
        // TODO: answer here
        if(this.data.length == 10) {
            throw 'stack overflow'
        } else {
            this.top ++
            this.data.push(size)
        }
    }
}