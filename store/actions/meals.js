import axios from "axios";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filters: filterSettings };
};

export function fetchBlogs(paginate, category, sortby) {
  let request, url;
  url = `https://5d601c19c2ca490014b26db5.mockapi.io/users`;

  request = axios.get(url);

  return {
    type: FETCH_BLOGS,
    payload: request,
  };
}
