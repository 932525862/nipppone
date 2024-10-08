import gksImg from "../../assets/jlpt.png";

export const JLPT = () => {
  return (
    <section className="gks">
      <div className="container">
        <div className="gks-content">
          <div className="title">
            Yaponiya Universitetlariga 100% gacha grant yutish imkoniyati
          </div>
          <div className="gks-menu d-flex justify-between items-center">
            <div className="menu-left">
              <img src={gksImg} alt="photo" />
            </div>
            <div className="menu-right">
              <p>
                JLPT (Japanese-Language Proficiency Test) yapon tilini bilish
                darajasini baholash uchun xalqaro standartlashtirilgan imtihon
                bo‘lib, u til ko‘nikmalarini, jumladan, o‘qish, tinglash,
                grammatika, lug‘at va kanji (xitoycha belgilar)ni o‘z ichiga
                oladi. Test iyul va dekabr oylarida dunyo bo‘ylab o‘tkaziladi.
                JLPTdan o‘tish Yaponiyada ish yoki ta’lim olish uchun muhim
                talab bo‘lishi mumkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
