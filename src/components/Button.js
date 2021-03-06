import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress,children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#3F51B5',
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3F51B5',
        // marginLeft: 5,
        // marginRight: 5,
        elevation: 3
    },
    textStyle: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
};

export default Button;
