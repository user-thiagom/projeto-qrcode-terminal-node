import chalk from 'chalk'
import JabberModule from 'jabber'

const Jabber = JabberModule.default ?? JabberModule
const jabber = new Jabber()

async function handle(err, result) {
    if(err){
        console.log(chalk.white.bgRed("Error on aplication"))
        return
    }

    const paragrath = jabber.createParagraph(result.words)

    console.log(chalk.blue.bgBlack(paragrath))
}

export default handle