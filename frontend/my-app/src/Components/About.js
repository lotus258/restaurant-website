import "./CSS/About.css"

function About() {

return (
    <div id="about">
        <h2 style={{gridRow:"1", color:"#F4CE14", gridColumn:'1/13', gridRow: '1', backgroundColor:"#495E57"}}>About Us</h2>
        <div id="about-intro">
            Little Lemon is a cornerstone in the Salt Lake community and has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff. We offer delicious best Chinese takeout in Salt Lake City.
Jian started out at the Pearl Restaurant in the 80s. -- from Cafe Ahn Hong </div>
        <div id="about-hours">
            <div id='hours'>
                <ul>Open hours:</ul>
                <ul>Mon: 11:30 AM to 9:30 PM</ul>
                <ul>Tue: Closed</ul>
                <ul>Wed-Fri: 11:30 AM to 9:30 PM</ul>
                <ul>Sat-Sun: 10:30 AM to 10:00 PM</ul>
            </div>
        </div>
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14184.319571167265!2d-111.86071710890042!3d40.52551225427236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87527df5c208e215%3A0xac4e335c287d0b44!2sDraper%20City%20Park!5e1!3m2!1sen!2sus!4v1738860729955!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
             </iframe>
        </div>
    </div>
    );
}
export default About;