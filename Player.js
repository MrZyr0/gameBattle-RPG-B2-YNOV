'use-strict'

const Avatar = require('./Avatar')

class Player extends Avatar
{
    constructor()
    {
        super(100, 2, 10)
    }
}

module.exports = Player