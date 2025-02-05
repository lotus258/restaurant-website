import CustomersSay from "./CustomerSay";
import Special from "./Special";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";


function HomePage() {
    return (
        <div className="homePage">
            <CallToAction />
            <Special />
            <CustomersSay />
            <Chicago />
        </div>
    )
}

export default HomePage;