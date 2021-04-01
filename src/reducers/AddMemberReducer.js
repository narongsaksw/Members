const AddMember = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return state.concat([action.data]);
    case 'DELETE_MEMBER':
      return state.filter(member => member.id !== action.id);
    default:
      return state;
  }
};

export default AddMember;
