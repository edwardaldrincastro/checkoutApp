import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ paddingHorizontal: 20 }}>
                <TextInput
                    underlineColorAndroid={"#00000000"}
                    style={{
                        height: 50,
                        width: "100%",
                        borderWidth: 1,
                        borderColor: '#333333',
                        backgroundColor: '#fff',
                    }}
                />
            </View>

        );
    }
}

export default CustomTextInput;
