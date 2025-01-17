<div>
    <img src="https://github.com/ethandudu/DuduTruckRPC/blob/master/assets/logo.png" width="100%" />
</div>

# Dudu Truck RPC
## Version 1.0.1


### Disclaimer :
Tout utilisateur abusant de l'API Trucky avec Dudu Truck RPC sera tenu responsable de tout problème et sera très probablement interdit d'utiliser l'API Trucky.
Dudu Truck RPC est un outil pour connecter la Rich Presence de Discord à ETS2 et ATS, les abus d'API ne seront pas tolérés !

ETCARS 0.15.386 minimum est requis. 
Lien de téléchargement : https://etcars.jammerxd.com/

## Informations importantes :
* TruckersMP a sa propre Rich Presence, il faut la désactiver pour pouvoir profiter de Dudu Truck RPC
* Promods n'a pas été testé, si vous notez un problème merci de faire une issue !

Supporte **Euro Truck Simulator 2**, **American Truck Simulator** et **TruckersMP**.  

**Rich Presence en Solo**  
![Rich Presence en Solo](https://i.sgtbrds.tk/2ktsc.png)  

**Rich Presence en Multijoueur**  
![Rich Presence en Multijoueur](https://i.sgtbrds.tk/of86i.png)  

## Changelog
### Mise à jour 1.0.1
 - Changement de l'affichage de la Rich Presence
 - L'image de la Rich Presence Change en fonction du camion
 - Ajout de la télémétrie du camion sur la grande image (Vitesse en km/h ou mph en fonction du jeu, rapport engagé, RPM, Cruise Control)

## Installation
* Installez Dudu Truck RPC depuis la [Releases Page](https://github.com/ethandudu/DuduTruckRPC/releases) .

Pour plus d'informations, rendez vous sur le guide (UserGuide.md).

## Environnement de test :

Pré-requis :  
* ETCARS 0.15.386 - https://etcars.jammerxd.com/
* NodeJS - https://nodejs.org/  
* Git - https://git-scm.com

1. Installer les programmes
3. Ouvrir un CMD/Powershell et aller dans le répertoire.  
4. Installer les modules NodeJS avec `npm i` dans le CMD/Powershell.  
5. Lancer la Rich Presence avec `node index.js --dev`. (--dev n'est pas obligatoire mais recommandé) (commande recommandée : `node .\index.js --logallactivity --dev --logetcarsdata`)
6. Lancer ETS2/ATS.  
7. Jouer ! 

### Pourquoi utiliser un script VB?
Afin de pouvoir lancer le script sans avoir une fenêtre, ce qui est plus agréable !

## Logs
Les logs sont stockés ici :
* Windows: `%appdata%\VirtualTruckerRichPresence\`
* Linux: `/var/local/VirtualTruckerRichPresence/`
* MacOS: `/home/Library/Preferences/VirtualTruckerRichPresence/`

## Paramètres de démarrage :
* `--dev` : activer les logs détaillés du script et le comportement de l'IDE
* `--promods` : active le mode Promods, ne change pas grand chose à part les images (pas encore implémanté)
* `--logetcarsdata` : renvoi toutes les données reçues de ETCARS
* `--logallactivity` :renvoi les informations de Rich Presence envoyées à Discord
* `--clientConfiguration` : spécifie le chemin du clientconfiguration.json


# Credits
## Dudu Truck RPC :
Ethandudu

Merci à Yazouv pour l'aide en JS :)


## Projet initial :
SgtBreadStick: Code, images, guides.
jammerxd: ETCARS plugin.
dowmeister: ETCARS plugin, code, Trucky & Trucky API.
Lasse: Projet initial, code.  
