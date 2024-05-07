function AboutMe () {

    const city = 'Park City'
    const state = 'Kansas'

    let styles = {
        ul: {
            textAlign: 'left',
            color: "green"
        },
        p: {
            fontSize: '20pt'
        }
    }

    return (
        <div>
            <p style={styles.p}>I grew up in {city}, {state}</p>
            <p>The three most previous places I've visited in no particular order are:</p>
                <ul style={styles.ul}>
                    <li>Amarillo</li>
                    <li>Walmart</li>
                    <li>QuikTrip</li>
                </ul>
        </div>
    )
}

export default AboutMe;