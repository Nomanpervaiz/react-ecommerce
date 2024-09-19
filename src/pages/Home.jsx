import AppButton from '../components/Button';
import myImage from "../assets/pngwing.com (9).png";
import AppAbout from './About';
import AppProduct from './Product';
import AppContact from './Contact';

function AppHome() {
 

  return (
   
    <div className='container' >
      <section className=" body-font home container" >
        <div className="container mx-auto flex px-0 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mb-10 md:mb-0">
            <h1 className="title-font sm:text-3xl text-3x1 mb-0 font-small "></h1>
            <h1 className="title-font sm:text-6xl text-3xl mb-1 font-medium ">Cosmatic Store</h1>

            <h1 className="title-font sm:text-2xl text-3x1 mb-2 font-small ">We Believe beauty is belong to Cosmetic. </h1>
            <p className="mb-8 pr-20 custom-center leading-relaxed">
              Welcome to GlowUp Cosmetics, your ultimate destination for beauty that shines from within. Founded with a passion for enhancing natural beauty, we offer a diverse range of cosmetics that cater to all skin types, tones, and textures.
            </p>
            <div className="flex justify-center">
              <AppButton className="btn1" name="Shop Now" path="/product" />
              <AppButton className="btn2" name="Contact us" path="/contact" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 imgDiv">
            <img
              className="coverImg"
              alt="hero"
              src={myImage}
            />
          </div>
        </div>
      </section>
      <AppAbout />
      <AppProduct />
      <AppContact />



    </div>
  );
}

export default AppHome;

