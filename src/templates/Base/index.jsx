import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

const Base = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Base
