'use-strict'

const Player = require('./Player')
const Monster = require('./Monster')
const ChildMonster = require('./ChildMonster')
let nbOfMonsters = 0

const player = new Player()

while (player.health > 0)
{
    nbOfMonsters++
    const monster = nbOfMonsters % 3 === 0 ? new ChildMonster() : new Monster()

    monster instanceof Monster ? console.log(`A monster appear ! (${monster.health}hp)\n`) : console.log(`A child monster appear ! (${monster.health}hp)\n`)
    console.log('\tFighting...')

    while (monster.health > 0)
    {
        let playerDmg = player.doDmg()
        console.log('\tPlayer do ' + playerDmg + ' damage')
        monster.sufferDmg(playerDmg)

        if (monster.health > 0)
        {
            let monsterDmg = monster.doDmg()
            console.log('\tMonster do ' + monsterDmg + ' damage')
            player.sufferDmg(monsterDmg)
        }
        else
        {
            console.log('\tThe monster died !')
        }
    }
    
    if (player.health <= 0)
    {
        console.log('\n The player died...\n')
    }
    else
    {
        console.log('\nPlayer has : ' + player.health + ' hp left' + '\n')
    }
}


