'use-strict'

const Avatar = require('./Avatar')

class Monster extends Avatar
{
    constructor()
    {
        super(20, 1, 6)
    }
}

module.exports = Monster