import React from 'react';
import DropDown from '@aemforms/af-react-vanilla-components'
import { MapTo } from '@adobe/aem-react-editable-components';

const DropDownEditConfig = {
  emptyLabel: 'Drop Down',
  isEmpty(props) {
    return !props;
  },
};
export default MapTo('myspa/components/adaptiveForm/dropdown')(DropDown, DropDownEditConfig);
