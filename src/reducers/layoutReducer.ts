interface ILayoutState {
  collapsed: boolean;
}

export const changeLayout = (layout: ILayoutState) => async dispatch =>
  dispatch({
    type: 'CHANGE_LAYOUT',
    data: {
      layout,
    },
  });

const defaultLayoutState: ILayoutState = { collapsed: false };

const layoutReducer = (
  state: ILayoutState = defaultLayoutState,
  action: { type: any; data: { layout: ILayoutState } }
): ILayoutState => {
  switch (action.type) {
    case 'CHANGE_LAYOUT':
      return action.data.layout;
    default:
      return state;
  }
};

export default layoutReducer;
