import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="contacts">
                    <title>Contacte</title>
                    <div className="contacts-opacity">
                        <div className="contacts-details">
                            <h3>Contacte :</h3>
                            <ul>
                                <li><i className="fas fa-search-location"></i> Adresa noastra :</li>
                                <li><i className="fas fa-at"></i> E-mail : Burduiucvictor@gmail.com</li>
                                <li><i className="fas fa-phone-square-alt"></i> Nr. de contact : +37378944444</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <title>Follow us</title>
                    <div className="follow-opacity">
                        <div className="follow-details">
                            <h3>Follow us</h3>
                            <a id="follow-link" href="https:www.facebook.com">www.facebook.com</a>
                        </div>
                    </div>
                </div>
                <div className="schedule">
                    <title>Program de lucru</title>
                    <div className="schedule-opacity">
                        <div className="schedule-details">
                            <h3>Program de lucru:</h3>
                            <div className="orar">
                                <div className="zi">Luni - Vineri</div>
                                <div className="ora"> 9:00 - 17:00</div>
                            </div>
                            <div className="orar">
                                <div className="zi">Simbata - Duminica</div>
                                <div className="ora"> Zi libera</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;