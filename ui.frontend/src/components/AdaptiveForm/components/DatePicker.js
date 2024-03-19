import React from 'react';
import {DateInput} from '@aemforms/af-react-vanilla-components'
import { MapTo } from '@adobe/aem-react-editable-components';

const DateInputEditConfig = {
  emptyLabel: 'Date Picker',
  isEmpty(props) {
    return !props;
  },
};
export default MapTo('myvanilaspa/components/adaptiveForm/datepicker')(DateInput, DateInputEditConfig);
