import {Button, FlatList, RefreshControl, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { MainStackNavigationProps } from '../../types';
import {useRootNotes} from '../../hooks';
import {Post} from '../../shared/components/Post';
import {ProfileScreenProps} from '../../types';
import {ProfileInfo} from './Info';
import styles from './styles';

export const Profile: React.FC<ProfileScreenProps> = ({route}) => {
  const {publicKey} = route.params ?? {};

  const notes = useRootNotes({authors: [publicKey]});
  const navigator = useNavigation<MainStackNavigationProps>();
  const Dialogpage = () => {
    navigator.push('DialogPage');
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<ProfileInfo publicKey={publicKey} />}
        data={notes.data.pages.flat()}
        keyExtractor={(item) => item?.id}
        renderItem={({item}) => {
          return <Post event={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={notes.isFetching} onRefresh={() => notes.refetch()} />
        }
      />

<Button title="Click to go to Dialog page" onPress={Dialogpage} />
    </View>
  );
};
