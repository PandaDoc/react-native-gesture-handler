declare const _default: {
  ScrollView: typeof import('react-native').ScrollView;
  PanGestureHandler: typeof import('react-native').View;
  attachGestureHandler: () => void;
  createGestureHandler: () => void;
  dropGestureHandler: () => void;
  updateGestureHandler: () => void;
  Directions: {
    readonly RIGHT: 1;
    readonly LEFT: 2;
    readonly UP: 4;
    readonly DOWN: 8;
  };
  State: {
    readonly UNDETERMINED: 0;
    readonly FAILED: 1;
    readonly BEGAN: 2;
    readonly CANCELLED: 3;
    readonly ACTIVE: 4;
    readonly END: 5;
  };
};
export default _default;
