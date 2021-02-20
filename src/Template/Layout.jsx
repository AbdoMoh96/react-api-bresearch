import './Assets/scss/index.scss';
import Header from './Components/Header';
import NestedList from './Components/SideNav';
import Footer from './Components/Footer'

const Layout = (props) => {


   return(
     <>
        <div className="super_container">
         <Header/>
         <NestedList />
         <section className="main_content">
          {props.children}
          </section>
         <Footer/>
        </div>
      </>
   );
}

export default Layout;