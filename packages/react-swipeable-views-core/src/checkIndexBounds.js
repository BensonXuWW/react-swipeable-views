import warning from 'warning';
import getIndexMax from './getIndexMax';

const checkIndexBounds = props => {
  const { index } = props;

  const childrenCount = getIndexMax(props);

  warning(
    index >= 0 && index <= childrenCount,
    `react-swipeable-view: the new index: ${index} is out of bounds: [0-${childrenCount}].`,
  );
};

export default checkIndexBounds;
