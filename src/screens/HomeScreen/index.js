import {View, FlatList} from 'react-native';
import React from 'react';

import {useGetChatDialogs} from '../../services';
import {useAppContext} from '../../context';
import {ChatDialog, EmptyListContainer, FloatingActionButton} from '../../components';
import {styles} from './styles';
import {IMAGES} from '../../assets';
import {NavigationService} from '../../navigation';
import {NavigateTo} from '../../utils';

const HomeScreen = () => {
  const {
    state: {
      session: {id},
    },
  } = useAppContext();
  const {data: dialogs = [], isLoading} = useGetChatDialogs({showLoading: true, currentUserId: id});

  const goToChatScreen = params => NavigationService.navigate(NavigateTo.CHAT_SCREEN, {params});

  const renderItem = ({item, index}) => {
    const marginTop = index === 0 ? 10 : 0;
    return (
      <View style={{marginTop}}>
        <ChatDialog dialog={item} onPress={() => goToChatScreen(item)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dialogs}
        keyExtractor={(item, index) => item._id + index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyListContainer isLoading={isLoading} text="No Chats, Add Contacts to Chat." verticalSpace={50} />}
      />
      <FloatingActionButton iconImage={IMAGES.chat} onPress={() => NavigationService.navigate(NavigateTo.ADD_CONTACT_SCREEN)} />
    </View>
  );
};

export default HomeScreen;
