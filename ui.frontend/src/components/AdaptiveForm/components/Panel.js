import React from 'react';
import {Panel} from '@aemforms/af-react-vanilla-components';
import { MapTo, ResponsiveGrid } from '@adobe/aem-react-editable-components';

const PanelEditConfig = {
  emptyLabel: 'Adaptive Form Panel',
  isEmpty(props) {
    return props.cqItems == null || props.cqItems.length === 0;
  },
};

export default MapTo('myvanilaspa/components/adaptiveForm/panelcontainer')(Panel, PanelEditConfig);
