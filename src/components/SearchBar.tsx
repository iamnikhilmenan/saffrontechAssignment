import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import THEME from '../config/Theme';
import Icon from 'react-native-vector-icons/Fontisto';

type searchBarTypes = {
  setSearchText: (text: string) => void;
  onSearchHandler: () => void;
  isLoading: boolean;
  searchText: string;
};

export default function SearchBar({
  setSearchText,
  onSearchHandler,
  isLoading,
  searchText,
}: searchBarTypes): React.JSX.Element {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        value={searchText}
        placeholder="Search Here..."
        placeholderTextColor={THEME.COLORS.black}
        onChangeText={(text: string) => setSearchText(text)}
        onSubmitEditing={onSearchHandler}
        style={{color: THEME.COLORS.black, fontWeight: '400'}}
      />
      {searchText === '' ? (
        <TouchableOpacity onPress={onSearchHandler}>
          <Image
            source={require('../assets/images/searchIcon.png')}
            style={styles.searchIcon}
            tintColor={THEME.COLORS.black}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Icon name="close-a" size={16} color={THEME.COLORS.black} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: THEME.COLORS.primaryBlue,
    paddingHorizontal: THEME.SIZE.default / 5,
    borderRadius: THEME.SIZE.default / 2,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
});
