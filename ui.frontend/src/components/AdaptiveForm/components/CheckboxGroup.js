import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import {CheckBoxGroup} from '@aemforms/af-react-vanilla-components'

const CheckboxGroupEditConfig = {
  emptyLabel: 'Checkbox Group',
  isEmpty(props) {
    return !props;
  },
};
export default MapTo('myvanilaspa/components/adaptiveForm/checkboxgroup')(CheckBoxGroup, CheckboxGroupEditConfig);
