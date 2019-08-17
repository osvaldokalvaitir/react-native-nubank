import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator(
    { Main },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#8b10ae',
        },
        headerTintColor: '#ffffff'
      },
    }
  )
);

export default Routes;
