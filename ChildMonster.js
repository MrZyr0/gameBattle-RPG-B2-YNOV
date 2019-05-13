'use-strict'

const Avatar = require('./Avatar')

class ChildMonster extends Avatar
{
    constructor()
    {
        super(10, 0, 4)
    }
}

module.exports = ChildMonster