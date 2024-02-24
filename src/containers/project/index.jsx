import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.css";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce Dashboard",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1706964802/WhatsApp_Image_2024-02-03_at_6.22.57_PM_bvpymf.jpg",
    link: "https://splendid-scone-f8c8be.netlify.app/",
  },
  
  {
    id: 2,
    name: "Moms Store",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1706964386/WhatsApp_Image_2024-02-03_at_6.16.04_PM_p5sjh1.jpg",
    link: "https://moms-store.netlify.app/",
  },
  {
    id: 2,
    name: "Text Utils",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1706967503/WhatsApp_Image_2024-02-03_at_7.08.07_PM_ep5j2y.jpg",
    link: "https://elaborate-otter-98ee35.netlify.app/",
  },
  {
    id: 3,
    name: "Fire tv",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1698293591/cur_coklva.png",
    link: "https://drive.google.com/file/d/1uokZQ3zqUY0Jtytkhz2oPbat8AegM3_l/view?usp=sharing",
  },
  
  {
    id: 3,
    name: "Weather-finder",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1708767009/WhatsApp_Image_2024-02-24_at_2.59.49_PM_qamnks.jpg",
    link: "https://incredible-florentine-6cdedf.netlify.app/",
  },
  {
    id: 3,
    name: "Chat App",
    link: "https://harshkr2308.github.io/Discussion-Bot/",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1693125857/chatapp/receive_dskoc7.png",
  },
  {
    id: 3,
    name: "Grievence-Management-System-IIITG",
    image:
      "https://res.cloudinary.com/dko27pkev/image/upload/v1707121649/WhatsApp_Image_2024-02-05_at_1.57.06_PM_u8uc8h.jpg",
    link: "https://gms-23-hah.000webhostapp.com/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Project = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }
  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <a>
                <div className="portfolio__content__cards__item__img-wrapper">
                  <img alt="dummy data" src={item.image} />
                </div>
              </a>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>
                      <a href={item.link}> Visit</a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
