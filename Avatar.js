'use-strict'

const utils = require('./utils');


class Avatar
{
    constructor(life, minDmg, maxDmg)
    {
        this._life = life
        this._minDmg = minDmg
        this._maxDmg = maxDmg
    }

    get health() { return this._life }

    sufferDmg(dmg)
    {
        this._life -= dmg
    }

    doDmg()
    {
        return utils.getRandomInt(this._minDmg, this._maxDmg)
    }
}

module.exports = Avatar