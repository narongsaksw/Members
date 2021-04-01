const AddMember = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return state.concat([action.data]);

    default:
      return state;
  }
};

export default AddMember;
