import React from 'react'
import Moi from '../img/Anthony_Carreta.jpg'
import ProgressBar from './ProgressBar'
import CursorHelp from '../img/help.png'

function ChangeDetail(id, declancheur) {
    const detail = (id) => document.getElementById(`detail-${id}`).style.maxHeight

    if (detail(id) === '0px' && declancheur === 'click') {
        document.getElementById(`detail-${id}`).style.maxHeight = '200px'
    } else {
        document.getElementById(`detail-${id}`).style.maxHeight = '0px'
    }

}

export default function CV() {
    const cursorHelpStyle = { cursor: `url(${CursorHelp}), help` }
    const texteDescription = "L'esprit libre, je me suis majoritairement formé en autodidacte. La curiosité et la compréhension des systèmes de développement des nouvelles génération m'intrigue et me passionne. J'ai approfondie mes compétences en développement en suivant un programme d'accompagnement. Par ailleurs, l'hypnose m'a apporté des valeurs au quotidien. Ces deux univers me permettent de m'adapter à tout type de mission. La communication est une chose essentielle pour moi, car elle permet d'élever en maturité les projets dans lesquels je m’implique."
    const texteDescriptionMisEnPage = texteDescription.split('.').map((value, key) => <p key={key}>{value}</p>)
    const photo = <div id='cv-photo'> <img className='cercle-img' alt='Anthony Carreta' src={Moi} /> </div>
    const description =
        <div id='cv-desc'>
            <h2>A Propos</h2>
            {texteDescriptionMisEnPage}
            <div id='download'>
                <span><i className='fas fa-file' />Telecharger mon CV (PDF) </span>
            </div>
        </div>

    const formation = // intitulé, structure, date de debut, date de fin, description
        [
            ['Formation Développeur Freelance', 'Coding Accelerator', 'Decembre 2019', 'Mars 2020', "Programme d'accompagnement Développeur Freelance"],
            ['Certification Praticien Hypnose Ericksonienne', 'ARCHE', 'Aout 2016', null, "Apprentissage des pratiques et théories de praticien ainsi que l'accompagnement complet des patients"],
            ['BEP - SEN', 'Verte feuille St Andre', '2011', '2013', "Systemes Electronique et Numerique"]
        ]
    const experience =
        [
            ['Développeur Front-End', 'Freelance', 'A.CARRETA', 'Avril 2020', null, null],
            ['Approvisionneur', 'CDI', 'Daltys', 'Decembre 2019', 'Mars 2020', ['Approvisionnement de distributeur automatique de boisson chaude et confiserie', 'Maintenance préventive du matériel', 'Ramassage des fonds', 'Mise en service de nouvelle machine', 'Gestion de stock']],
            ['Serveur Barman', 'CDI', 'Café de foy', 'Aout 2019', 'Novembre 2019', null],
            ['Responsable de zone', 'Interim', 'But Logistique', 'Mai 2019', 'Juin 2019', ['Organisation de l’expédition de marchandise', 'Contrôle qualités des palettes', 'Accueil et formation des nouveaux arrivants']],
            ['Recruteur de donnateur', 'CDD', 'Cause à Effet', 'Fevrier 2018', 'Mai 2019', null],
            ['Praticien en hypnose', 'Auto entrepreneur', 'Hypnose Vision', 'Janvier 2017', 'Decembre 2018', null],
            ['Repérage et cartographie de fibre optique', "Contrat d'avenir", 'Métropole Européenne de Lille', 'Janvier 2015', 'Decembre 2016', ["Création de rapport d'identification sur site", "Création de plan des maillage de fibre optique", "Création de rapport d'implémentation de fibre optique sur salle serveur", "Maintenance de système vidéo", "Création de macro Excel"]],
            ['Employer Polyvalent', 'CDI', "McDonald's", 'Mars 2014', 'Novembre 2014', null],
            ['Technicien Téléphonie', "CDD", 'Point Service Mobile', 'Juillet 2013', 'Octobre 2013', ["Accueil client", "Réparation des produits mobiles (Toutes gammes)", "Reprogrammation logiciel mobile", "Gestion de stock"]],
        ]
    const langages = [['HTML5', 90], ['CSS3', 90], ['JavaScript', 80], ['PHP', 20]]
    const frameworks = [['ReactJS', 90], ['Redux', 90], ['Sass', 90], ['Bootstrap', 80], ['Material-ui', 70], ['Wordpress', 60], ['Laravel', 20], ['Ruby On Rails', 20]]
    const bdd = [['Firebase', 85], ['PhpMyAdmin', 75], ['MySQL', 60], ['SQLLite', 50], ['PostgreSQL', 30]]

    const formationFormated =
        formation.map((value, key) =>
            <div className='container-formation' key={key}>
                <p className='color-bleu'><b >{value[0]}</b> - {value[1]} </p>
                <p>{value[2]} {(value[3]) ? `à ${value[3]}` : null} </p>
                <i>{value[4]}</i>
            </div>
        )


    const experienceFormated =
        experience.map((value, key) =>
            (value[5]) ?
                <div className='container-formation' key={key} onMouseLeave={() => ChangeDetail(key)} onClick={() => ChangeDetail(key, 'click')}>
                    <p className='color-bleu'><b>{value[2]}</b> - {value[1]}</p>
                    <p style={cursorHelpStyle} className='show-detail'>{value[0]} | {value[3]} à  {(value[4]) ? value[4] : 'maintenant'} </p>
                    <div id={`detail-${key}`} className='detail'>
                        {value[5].map((valueList, key) =>
                            <li className='detail-experience' key={key}> - {valueList}</li>
                        )}
                    </div>
                </div>
                :
                <div className='container-formation' key={key}>
                    <p className='color-bleu'><b>{value[2]}</b> - {value[1]}</p>
                    <p>{value[0]} | {value[3]} à  {(value[4]) ? value[4] : 'maintenant'} </p>
                </div>
        )

    const skill = (name, key, pourcentage) => (
        <div key={key} className='container-detail'>
            <div className='name-skill'>{name}</div>
            <div className='container-progressbar'><ProgressBar pourcentage={pourcentage} /></div>
        </div>
    )


    const createSkill = (id, name, array) =>
        <div id={id}>
            <h3>{name}</h3>
            {array.map((value, key) => skill(value[0], key, value[1]))}
        </div>

    const detail =
        <div id='detail-competence'>
            <h2>Detail des competences</h2>
            {createSkill('langages', 'Langages', langages)}
            {createSkill('frameworks', 'Frameworks', frameworks)}
            {createSkill('bdd', 'Base de Données', bdd)}
        </div>


    const template =
        <div id='container-cv'>
            <div className='categorie-title'>
                <h1><i className='fas fa-file' />  Curriculum Vitae</h1>
            </div>
            <div>
                <div id='cv-presentation'>
                    {photo}
                    {description}
                </div>
                <div id='cv-parcours'>
                    <div id='cv-formation'>
                        <h2>Formation</h2>
                        {formationFormated}
                    </div>
                    <div id='cv-experience'>
                        <h2>Exeperience</h2>
                        {experienceFormated}
                    </div>
                </div>
                {detail}
            </div>
        </div>



    return (
        template
    )
}
