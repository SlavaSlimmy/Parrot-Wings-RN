import React from 'react';
// import {
//   Text
// } from 'react-native';
import { BottomSheet, ListItem } from 'react-native-elements';

function MainBottomSheet() {
  const [isVisible, setIsVisible] = React.useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <BottomSheet isVisible={isVisible}>
      {list.map((l) => (
        <ListItem key={l.title} containerStyle={l.containerStyle} onPress={l.onPress}>
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
}

export default MainBottomSheet;
