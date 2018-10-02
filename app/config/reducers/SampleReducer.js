const SampleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAMPLE":
      return {...state, data: action.data};
    default:
      return {...state};
  }
};

export default SampleReducer;
