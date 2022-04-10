import { CompanyInfoQuery } from '../../generated/graphql';
import ElonMusk from './Images/ElonMusk.jpg';
import GwynneShotwell from './Images/GwynneShotwell.jpg';
import TomMuller from './Images/TomMuller.jpg';
import styles from './home.module.css';

interface Props {
    data: CompanyInfoQuery
}

const Home: React.FC<Props> = ({ data }) => {
    console.log(data);

    return (

        <div title='companyInfo' className={styles.homeContainer}>
            <div className={styles.heroImage}>
                <div className={styles.shade}>
                    <div className={styles.missionDetails}>
                        <h1>{data.info?.name}</h1>
                        <h6>{data.info?.summary}</h6>
                    </div>
                    {/* <h5>Founder, CEO, CTO: {data.info?.ceo}</h5>
                            <h5>COO: {data.info?.coo}</h5>
                            <h5>CTO Propulsion: {data.info?.cto_propulsion}</h5>
                            <h5>Employees: {data.info?.employees}</h5>
                            <h5>Valuation: {data.info?.valuation}</h5> */}
                </div>
            </div>
            <div className={styles.persons}>
                <div className={styles.person}>
                    <img src={ElonMusk} alt={'Elon Musk'} />
                    {/* <div className={styles.image}></div> */}
                    <h4>{data.info?.ceo}</h4>
                    <p>Founder, CEO, CTO</p>
                </div>
                <div className={styles.person}>
                    <img src={GwynneShotwell} alt={'Gwynne Shotwell'} />
                    {/* <div className={styles.image}></div> */}
                    <h4>{data.info?.coo}</h4>
                    <p>COO</p>
                </div>
                <div className={styles.person}>
                    <img src={TomMuller} alt={'Tom Muller'} />
                    {/* <div className={styles.image}></div> */}
                    <h4>{data.info?.cto_propulsion}</h4>
                    <p>CTO Propulsion</p>
                </div>

            </div>
        </div>
    );
}

export default Home;