import { useAppDispatch } from '@src/app/hooks';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { BANNER } from '@src/mock/handlers/data/banner.data';
import { Filter, Notification, Search } from '@src/shared/assets/icons';
import { Box } from '@src/shared/ui/Box';
import { Button } from '@src/shared/ui/Button';
import { Input } from '@src/shared/ui/Input';
import { Row } from '@src/shared/ui/Row/Row';
import { useForm } from 'react-hook-form';
import { styles } from './ShopHomeStyle';

type FilterDto = {
  search?: string;
  search2?: string;
};

export const ShopHome = () => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState({ width: 0, height: 0 });
  //const restaurants = useSelector(selectRestaurants);
  //const banner = useSelector(selectBanner);
  const banner = BANNER;

  const {
    control,
    formState: {},
  } = useForm<FilterDto>();

  function getSize(uri: string) {
    return Image.getSize(
      uri,
      (srcWidth, srcHeight) => {
        const maxHeight = Dimensions.get('window').height; // or something else
        const maxWidth = Dimensions.get('window').width - 25 * 2;

        const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        setSize({ width: srcWidth * ratio, height: srcHeight * ratio });
      },
      error => {
        console.log('error:', error);
      },
    );
  }

  useEffect(() => {
    getSize(banner.img);
    //dispatch(fetchRestaurants());
    //dispatch(fetchBanner());
  }, [banner]);

  return (
    <Box>
      <View style={{ gap: 20 }}>
        <Row>
          <Text style={styles.title}>{`Find Your \nFavorite Food`}</Text>
          <Button style={styles.buttonIcon}>
            <Notification />
          </Button>
        </Row>
        <Row gap={9}>
          <Input
            name="search"
            control={control}
            placeholder="What do you want to order?"
            licon={Search}
          />
          <Button style={styles.buttonIcon}>
            <Filter />
          </Button>
        </Row>
        {banner && (
          <Image
            style={{ width: size.width, height: size.height }}
            resizeMode="cover"
            source={{ uri: banner.img }}
          />
        )}
        {/* <FlatList
          data={restaurants}
          keyExtractor={(_, index) => `item-${index}`}
          renderItem={({ item }) => (
            <Text style={{ color: 'white' }}>{item.name}</Text>
          )} */}
      </View>
    </Box>
  );
};

/**
 * Step3 Shop screen
 * - See the auth state in Reactotron
 * - After reloading the state is default - Reloading resets all the states
 * - After background the states are reseted
 *
 * 0 After adding items I want to see them on Reactotron
 *
 *
 * 1 How to keep states?
 * When you refresh or leave page, you are restarting the redux store so it will always go back to the default. If you want to persist the store you will need to use a tool like redux-persist. Here is how you could setup your store with redux-persist.
 * add redux-persist
 *
 * 2 Show the ShopHome with list of
 *
 * 2.1 Get all the products:
 *- Add button and show restaurants
 * - refactor handlers and add restaurants handlers
 *
 * - DO the mestake in api: restaurant instead of restaurants
 * - see error in Reactotron: API RESPONSE 404
 * - And then refactoring
 *
 * 3 Add interceptor and show 500 error
 *
 * 4 create Layout
 * font:
 * https://github.com/kuali/www-theme-kuali/tree/master/fonts/BentonSans
 * add font
 * - npx react-native-asset -> yes
 *
 *
 *
 */
