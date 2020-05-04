export interface FilterState {
  name: string;
  status: string;
  sortBy: string;
  dates: Array<string>;
}

export type FilterActionType =
  | { type: "FILTER_NAME"; name: string }
  | { type: "FILTER_STATUS"; status: string }
  | { type: "FILTER_DATES"; dates: Array<string> }
  | { type: "SORT_BY"; sortType: string }
  | { type: "CLEAR"; defaultFilter: FilterState };

export const FILTER_INITIAL_STATE: FilterState = {
  name: "",
  status: "",
  sortBy: "",
  dates: ["01-01-1950", "01-01-2025"],
};

export const Creators = {
  filterName: (name = "") => ({
    type: "FILTER_NAME",
    name,
  }),

  filterStatus: (status = "") => ({
    type: "FILTER_STATUS",
    status,
  }),

  filterDates: (dates = []) => ({
    type: "FILTER_DATES",
    dates,
  }),

  sortBy: (sortType: any) => ({
    type: "SORT_BY",
    sortType,
  }),

  clear: () => ({
    type: "CLEAR",
    defaultFilter: FILTER_INITIAL_STATE,
  }),

  FILTER_INITIAL_STATE: {
    name: "",
    status: "",
    sortBy: "",
    dates: ["01-01-1950", "01-01-2025"],
  },
};

const filtersReducer = (
  state = FILTER_INITIAL_STATE,
  action: FilterActionType
) => {
  switch (action.type) {
    case "FILTER_NAME":
      return {
        ...state,
        name: action.name,
      };

    case "FILTER_STATUS":
      return {
        ...state,
        status: action.status,
      };

    case "FILTER_DATES":
      return {
        ...state,
        dates: action.dates,
      };

    case "SORT_BY":
      return {
        ...state,
        sortBy: action.sortType,
      };

    case "CLEAR":
      return {
        ...state,
        dates: action.defaultFilter.dates,
        name: action.defaultFilter.name,
        status: action.defaultFilter.status,
        sortBy: action.defaultFilter.sortBy,
      };

    default:
      return state;
  }
};

export default filtersReducer;
