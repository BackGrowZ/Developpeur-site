import React from 'react'
import Moi from '../img/Anthony_Carreta.jpg'

export default function CV() {
    const texteDescription = "L'esprit libre, je me suis majoritairement formé en autodidacte. La curiosité et la compréhension des systèmes de développement des nouvelles génération m'intrigue et me passionne. J'ai approfondie mes compétences en développement en suivant un programme d'accompagnement. Par ailleurs, l'hypnose m'a apporté des valeurs au quotidien. Ces deux univers me permettent de m'adapter à tout type de mission. La communication est une chose essentielle pour moi, car elle permet d'élever en maturité les projets dans lesquels je m’implique."
    const texteDescriptionMisEnPage = texteDescription.split('.').map((value, key) => <p key={key}>{value}.</p>)
    const photo = <div id='cv-photo'> <img className='cercle-img' alt='Anthony Carreta' src={Moi} /> </div>
    const description =
        <div id='cv-desc'>
            <h3>A Propos</h3>
            {texteDescriptionMisEnPage}
            <div id='download'>
                <span><i className='fas fa-file' />Telecharger mon CV (PDF) </span>
            </div>
        </div>

    const formation =
        [
            ['Formation Développeur Freelance', 'Coding Accelerator', 'Decembre 2019', 'Mars 2020', "Programme d'accompagnement Développeur Freelance"],
            ['Certification Praticien Hypnose Ericksonienne', 'ARCHE', 'Aout 2016', null, "Apprentissage des pratiques et théories de praticien ainsi que l'accompagnement complet des patients"],
            ['BEP - SEN', 'Verte feuille St Andre', '2011', '2013', "Systemes Electronique et Numerique"]
        ]
    const experience =
        [
            ['Développeur Front-End', 'Freelance', 'A.CARRETA', 'Avril 2020', null, [null]],
            ['Approvisionneur', 'CDI', 'Daltys', 'Decembre 2019', 'Mars 2020', ['Approvisionnement de distributeur automatique de boisson chaude et confiserie', 'Maintenance préventive du matériel', 'Ramassage des fonds', 'Mise en service de nouvelle machine', 'Gestion de stock']],
            ['Serveur Barman', 'CDI', 'Café de foy', 'Aout 2019', 'Novembre 2019', [null]],
            ['Responsable de zone', 'Interim', 'But Logistique', 'Mai 2019', 'Juin 2019', ['Organisation de l’expédition de marchandise', 'Contrôle qualités des palettes', 'Accueil et formation des nouveaux arrivants']],
            ['Recruteur de donnateur', 'CDD', 'Cause à Effet', 'Fevrier 2018', 'Mai 2019', [null]],
            ['Praticien en hypnose', 'Auto entrepreneur', 'Hypnose Vision', 'Janvier 2017', 'Decembre 2018', [null]],
            ['Repérage et cartographie de fibre optique', "Contrat d'avenir", 'Métropole Européenne de Lille', 'Janvier 2015', 'Decembre 2016', ["Création de rapport d'identification sur site", "Création de plan des maillage de fibre optique", "Création de rapport d'implémentation de fibre optique sur salle serveur", "Maintenance de système vidéo", "Création de macro Excel"]],
            ['Employer Polyvalent', 'CDI', "McDonald's", 'Mars 2014', 'Novembre 2014', [null]],
            ['Technicien Téképhonie', "CDD", 'Point Service Mobile', 'Juillet 2013', 'Octobre 2013', ["Accueil client", "Réparation des produits mobiles (Toutes gammes)", "Reprogrammation logiciel mobile", "Gestion de stock"]],
        ]
    return (
        <div id='container-cv'>
            <div className='categorie-title'>
                <h1>
                    <i className='fas fa-file' />
                    Curriculum Vitae
                </h1>
            </div>
            <div>
                <div id='cv-presentation'>
                    {photo}
                    {description}
                </div>
                <div id='cv-parcours'>
                    <div id='cv-formation'>
                        <h2>Formation</h2>
                    </div>
                    <div id='cv-experience'>
                        <h2>Exeperience</h2>
                    </div>
                </div>
                <div id='detail-competence'>
                    <h2>Detail des competences</h2>
                    <div id='langage'>
                        <h3>Langages</h3>
                    </div>
                    <div id='framework'>
                        <h3>Frameworks</h3>
                    </div>
                    <div id='bdd'>
                        <h3>Base de données</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
