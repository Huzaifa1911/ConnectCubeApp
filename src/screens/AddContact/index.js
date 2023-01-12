import {FlatList, View} from 'react-native';
import React, {useState} from 'react';

import {AppInput, EmptyListContainer, UserCard} from '../../components';
import {styles} from './styles';
import {useGetChatUsers} from '../../services';
import {NavigationService} from '../../navigation';
import {NavigateTo} from '../../utils';

const AddContactScreen = () => {
  const [search, setSearch] = useState('');

  const {data: users} = useGetChatUsers({searchText: search, showLoading: true});

  const goToChatScreen = params => NavigationService.navigate(NavigateTo.CHAT_SCREEN, {dialog: params});

  const renderItem = ({item, index}) => {
    const marginTop = index === 0 ? 10 : 0;
    return (
      <View style={{marginTop}}>
        <UserCard user={item} onPress={() => goToChatScreen(item)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppInput placeholder="Search  here" style={styles.inputStyle} onChangeText={text => setSearch(text)} value={search} />
      <FlatList
        data={users}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListContainer isLoading={false} text="No Contacts Found." verticalSpace={40} />}
      />
    </View>
  );
};

export default AddContactScreen;
