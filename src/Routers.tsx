import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar/navbar";
import HomeContainer from "./Components/Home";
import MissionItemsContainer from "./Components/Missions/MissionItems";
import MissionItemDetailsContainer from "./Components/Missions/MissionItemDetails";
import RocketItemsContainer from "./Components/Rockets/RocketItems";
import RocketItemDetailsContainer from "./Components/Rockets/RocketItemsDetails";
import ShipItemsContainer from "./Components/Ships/ShipItems";
import ShipItemDetailsContainer from "./Components/Ships/ShipItemDetails";

const RouterConfig = () => {
    return(
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/missionItems">
                    <Route path=":id" element={<MissionItemDetailsContainer />} />
                    <Route path="" element={<MissionItemsContainer />} />
                </Route>
                <Route path="/rocketItems">
                    <Route path=":id" element={<RocketItemDetailsContainer />} />
                    <Route path="" element={<RocketItemsContainer />} />
                </Route>
                <Route path="/shipItems">
                    <Route path=":id" element={<ShipItemDetailsContainer />} />
                    <Route path="" element={<ShipItemsContainer />} />
                </Route>
            </Routes>
        </Router>
    );    
}

export default RouterConfig;