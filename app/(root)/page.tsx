import Headerbox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName:'George', lastName: 'Whalez', email: 'plentymoney@george.com' };

    return (
        <section className="home">
            <div className="home-content">
              <header className="home-header">
                <Headerbox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account, including your transactions easily."
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.45}
                />
              </header>

              RECENT TRANSACTIONS
            </div>

            <RightSidebar 
              user={loggedIn}
              transactions={{}}
              banks={[{ currentBalance: 900.05 }, { currentBalance: 420.65 }]}
            />
        </section>
    )
}

export default Home 