import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "./ChefsPage.scss";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchChefsPageData } from "../../redux-toolkit/thunks/chefsPageThunk";
import { ChefData } from "../../models/types";
import { filterNewChefs } from "../../utils/redux-utils";

const ChefsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeFilter, setActiveFilter] = useState("All");
  const { chefs } = useSelector((state: RootState) => state.chefsPage);

  useEffect(() => {
    dispatch(fetchChefsPageData());
  }, [dispatch]);

  const handleFilterClick = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const getFilteredChefs = useCallback(() => {
    switch (activeFilter) {
      case "New":
        return filterNewChefs(chefs, 10);
      default:
        return chefs;
    }
  }, [activeFilter, chefs]);

  const getBackgroundImageStyle = (imageUrl: string) => ({
    backgroundImage: `url(${imageUrl})`,
  });

  return (
    <div className='chefs-page-container'>
      <h2 className='title'>CHEFS</h2>
      <div className='chefs-filter-buttons'>
        {["All", "New"].map((filter) => (
          <button key={filter} className={`filter-button ${activeFilter === filter ? "active" : ""}`} onClick={() => handleFilterClick(filter)}>
            {filter}
          </button>
        ))}
      </div>
      <div className='chefs-container'>
        <Fade>
          {getFilteredChefs().map((chef: ChefData) => (
            <div className='chef-container' key={chef.image}>
              <div className='chef-image-container' style={getBackgroundImageStyle(chef.image)}>
                <h3 className='chef-name'>{chef.chefName}</h3>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default ChefsPage;
