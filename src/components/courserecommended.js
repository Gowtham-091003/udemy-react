import img1 from "../asset1/images/Recommended img1.jpg";
import img2 from "../asset1/images/Recommended img3.jpg";
import img3 from "../asset1/images/Recommended img4.jpg";
import img4 from "../asset1/images/Recommended img12.jpg";

function Courserecommended() {
  return(
    <>
      <div id="recommended">

        <h2>Recommended for you</h2>
        <p>Pick the best fit for you</p>

        <div id="recommended__container">
            <div class="course">
              <img src= {img1} alt="image1"/>
              <h5>Visualisation Masteerclass</h5>
              <p>Col Steels</p>
              <p>4.6⭐⭐⭐⭐</p>
              <p>499 <del>1999</del></p>
            </div>

            <div class="course">
              <img src= {img2} alt="image2"/>
              <h5>Web Development|Advance</h5>
              <p>Col Steels</p>
              <p>4.8⭐⭐⭐⭐</p>
              <p>699 <del>2500</del></p>
            </div>

            <div class="course">
              <img src= {img3} alt="image3"/>
              <h5>Python Fulstack Development</h5>
              <p>Col Steels</p>
              <p>4.2⭐⭐⭐⭐</p>
              <p>499 <del>1999</del></p>
            </div>

            <div class="course">
              <img src= {img4} alt="image4"/>
              <h5>Basic to Advance Core-Java Training</h5>
              <p>Col Steels</p>
              <p>3.9⭐⭐⭐</p>
              <p>999<del>3999</del></p>
            </div>
        </div>
      </div>
    </>
  )
}
export default Courserecommended;
