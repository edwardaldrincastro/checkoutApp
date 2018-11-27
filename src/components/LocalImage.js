import React, { Component } from 'react';
import { Image, Dimensions  } from 'react-native';

const LocalImage = ({source, originalWidth, originalHeight, type}) => {
    let windowWidth = Dimensions.get("window").width/3
    if(type==="visa"){
        windowWidth = Dimensions.get("window").width/6
    } else if(type==="fedex"){
        windowWidth = Dimensions.get("window").width/4
    } else if(type==="creditCard"){
        windowWidth = Dimensions.get("window").width/1
    } else if(type==="applepay"){
        windowWidth = Dimensions.get("window").width/5
    }else {
        windowWidth = Dimensions.get("window").width/4
    }
    let widthChange = (windowWidth)/originalWidth
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * widthChange
    return (
       <Image source={source} style={{width: newWidth, height: newHeight}}/>
    )
}

export default LocalImage;
