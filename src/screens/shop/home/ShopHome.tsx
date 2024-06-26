import { useAppDispatch } from '@src/app/hooks';
import { Filter, Notification, Search } from '@src/shared/assets/icons';
import { Box } from '@src/shared/ui/Box';
import { Button } from '@src/shared/ui/Button';
import { Input } from '@src/shared/ui/Input';
import { Row } from '@src/shared/ui/Row/Row';
import { Banner } from '@src/widgets/banner/Banner';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './ShopHomeStyle';
import { RESTAURANTS } from 'mock/handlers/data/restaurants.data';
import { log } from '@src/shared/lib/debug/log';
import { Restaurant } from '@src/features/shop/shop.types';
import { getImageSize } from '@src/shared/lib/image/getImageSize';
import { ImageSize } from '@src/shared/lib/image/types';

type FilterDto = {
  search?: string;
};

interface ItemImageProps {
  uri: string;
}
const ItemImage = ({ uri }: ItemImageProps) => {
  const [size, setSize] = useState<ImageSize>({ width: 0, height: 0 });

  getImageSize(uri).then(setSize);

  return <Image style={size} source={{ uri }} />;
};

export const ShopHome = () => {
  const dispatch = useAppDispatch();
  //const restaurants = useSelector(selectRestaurants);
  const restaurants: Restaurant[] = RESTAURANTS;

  const {
    control,
    formState: {},
  } = useForm<FilterDto>();

  useEffect(() => {
    //dispatch(fetchRestaurants());
  }, []);

  const ListHeader = () => (
    <View style={styles.wrapperHeader}>
      <Text style={styles.header}>Nearest Restaurant</Text>
      <TouchableOpacity
        onPress={() => {
          log('', 'Cliked View More Restaurants');
        }}>
        <Text style={styles.headerLink}>View More</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }: { item: Restaurant }) => {
    return (
      <TouchableOpacity style={styles.restCard}>
        <ItemImage uri={item.img} />
        <Text style={styles.name}> {item.name}</Text>
      </TouchableOpacity>
    );
  };

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
        {/* <Banner /> */}
        <FlatList
          contentContainerStyle={{ gap: 20 }}
          //columnWrapperStyle={{ gap: GAP_BETWEEN_COLUMNS }}
          ListHeaderComponent={ListHeader}
          data={restaurants}
          keyExtractor={(_, index) => `item-${index}`}
          renderItem={renderItem}
        />
      </View>
    </Box>
  );
};
/* Rectangle 12 */

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
