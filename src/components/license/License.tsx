import licenseImg from "../../assets/license.jpg"
import { saveAs } from 'file-saver';

const License = () => {

  const handleDownload = () => {
    const pdfUrl = '/license.pdf';
    const pdfName = 'nippon-license.pdf';

    saveAs(pdfUrl, pdfName); // Faylni yuklab olish
  };

  return (
    <section className="license">
        <div className="container">
            <div className="license-content">
                <div className="title">License</div>
                <div className="license-info">
                  <div className="license-text">
                     <div className="license-title">Our center is licensed in accordance with the legislation of the Republic of Uzbekistan</div>
                     <div className="license-description">Our Nippon Learning Center is a private educational institution licensed to conduct extracurricular activities and licensed in accordance with the law. This means that you can trust us and everything is legal.</div>
                  </div>
                  <div className="license-img"><img src={licenseImg} alt="license photo" onClick={handleDownload}/></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default License