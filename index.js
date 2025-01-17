// VIRTUAL TRUCKER RICH PRESENCE

const LogManager = require('./LogManager');
const logger = new LogManager(); 
const config = require('./config');
const packageInfo = require('./package.json');
const argv = require('yargs').argv
const UpdateNotifier = require('./UpdateNotifier');
const ProModsNotifier = require('./ProModsNotifier');

logger.info('Chargement ...');
logger.info(`Version: ${packageInfo.version}`);
logger.info(`Platforme: ${process.platform}`);
logger.info('Démarrage paramètres :');
logger.info(argv)

var RichPresenceManager = require('./RichPresenceManager');
var presenceManager = new RichPresenceManager();
presenceManager.init();

var updateChecker = new UpdateNotifier();
updateChecker.checkUpdates();

var promodsNotify = new ProModsNotifier();
promodsNotify.notifyUser();


// maintain node process running
process.stdin.resume();