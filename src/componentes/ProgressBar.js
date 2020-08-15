import React from 'react'
import '../style/progressbar.css'

export default function ProgressBar(props) {
    const { pourcentage } = props
    let detail = '' // notion | bon niveau | avancer | expert

    if (pourcentage < 25) {
        detail = 'Notion'
    } else if (pourcentage >= 25 && pourcentage <= 50) {
        detail = 'Bon niveau'
    } else if (pourcentage > 50 && pourcentage <= 75) {
        detail = 'Avancé'
    } else if (pourcentage > 75) {
        detail = 'Expert'
    }
    return (
        <div className="progress" title={detail}>
            <div className="progress-bar" style={{ width: `${pourcentage}%` }} />
        </div>
    )
}
