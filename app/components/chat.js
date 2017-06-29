import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Button,
  ScrollView,
} from 'react-native';
import {
  Link,
} from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#FFFFFF',
  },
  username: {
    fontSize: 16,
  },
  me: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#F8F9FA',
    overflow: 'hidden',
    borderRadius: 10,
  },
  friend: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#ADB5BC',
    overflow: 'hidden',
    borderRadius: 10,
  },
  textMe: {
    fontSize: 16,
    color: '#484E55',
    padding: 10,
  },
  textFriend: {
    fontSize: 16,
    color: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderTopColor: 'gray',
    flex: 1,
  },
  send: {
    color: 'gray',
  },
  back: {
    paddingLeft: 20,
  },
  header: {
    right: 0,
    height: 40,
    paddingTop: 10,
    backgroundColor: '#868E95',
  },
  footer: {
    flex: 1,
    alignSelf: 'center',
    right: 0,
    left: 0,
    position: 'absolute',
    borderTopColor: '#B9B9B9',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  scrollView: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
});

class Chat extends Component {
  constructor(props) {
    super(props);
    // const { params } = this.props.navigation.state;
    const params = { message: 'Sample message will be here' };
    this.state = {
      text: '',
      messages: [
        { message: params.message, type: 'me' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'me' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'me' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'me' },
        { message: params.message, type: 'friend' },
        { message: params.message, type: 'me' },
        { message: 'last one', type: 'friend' },
      ],
      listHeight: 0,
      marginBottom: 40,
      scrollViewHeight: 0
    };
    this.onSend = this.onSend.bind(this);
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
  }
  componentWillMount() {
    Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentDidUpdate() {
    // calculate the bottom
    const bottomOfList = this.state.listHeight - this.state.scrollViewHeight;

    // tell the scrollView component to scroll to it
    this.scrollView.scrollTo({ y: bottomOfList + 20 });
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow);
    Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide);
  }

  onSend() {
    const { text } = this.state;
    if (text.length) {
      const messages = this.state.messages;
      messages.push({ message: text, type: 'me' });
      this.setState({ text: '' });
    }
  }

  keyboardWillHide() {
    this.setState({ marginBottom: 40 });
  }

  keyboardWillShow(keyboardInfo) {
    console.log('keyboardInfo', keyboardInfo);
    this.setState({ marginBottom: keyboardInfo.startCoordinates.height + 40 });
  }

  renderRow(message, index) {
    const viewStyle = message.type === 'me' ? styles.me : styles.friend;
    const textStyle = message.type === 'me' ? styles.textMe : styles.textFriend;
    return (
      <View style={viewStyle} key={index}>
        <Text style={textStyle}>{message.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Link style={styles.back} to="/conversations"><Text> back </Text></Link>
        </View>
        <ScrollView
          style={[styles.scrollView, { marginBottom: this.state.marginBottom }]}
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.setState({ listHeight: contentHeight });
          }}
          onLayout={(e) => {
            const height = e.nativeEvent.layout.height;
            this.setState({ scrollViewHeight: height });
          }}
        >
          {this.state.messages.map((message, index) => this.renderRow(message, index))}
        </ScrollView>
        <View style={[styles.footer, { bottom: this.state.marginBottom - 40 }]}>
          <TextInput
            style={styles.input}
            placeholder={'Type a message'}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            onSubmitEditing={Keyboard.dismiss}
          />
          <Button style={styles.send} onPress={this.onSend} title="Send" />
        </View>
      </View>
    );
  }
}

export default Chat;
