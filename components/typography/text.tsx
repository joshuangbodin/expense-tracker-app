import { StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { vh } from '@/helpers/responsivesizes';
import { theme } from '@/constants/theme';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface props {
    text?: string;
    isheader?: boolean;
    isSupporting?: boolean;
    isCentered?: boolean;
    style?: any;
    children?: React.ReactNode;
    size?:number;
    autosize? : boolean;
    capitalize?: boolean;
}


const CustomText = ({
    text,
    isheader = false,
    style,
    isSupporting = false,
    isCentered = false,
    children,
    size,
    autosize = false,
    capitalize = true,
}
    : props) => {

        const [loaded, error] = useFonts({
            'Inter': require('../../assets/font/Inter.ttf'),
          });

          useEffect(() => {
            if (loaded || error) {
              SplashScreen.hideAsync();
            }
          }, [loaded, error]);
        
          if (!loaded && !error) {
            return null;
          }


    if (children) {
        return (
             <Text
                style={[
                    styles.text,
                    isheader ? styles.headertext : isSupporting && styles.supporting,
                    isCentered && { textAlign: 'center' },
                    style,
                    size&&{fontSize:size},
                    {fontFamily:'Inter'},
                    capitalize&&{textTransform:'capitalize'}
                ]}
            >
                {children}
            </Text>
        )
    }

    if(autosize){
        return(
            <Text
            style={[
                styles.text,
                isheader ? styles.headertext : isSupporting && styles.supporting,
                isCentered && { textAlign: 'center' },
                style,
                size&&{fontSize:size},
                {fontFamily:'Inter'},
                capitalize&&{textTransform:'capitalize'}
            ]}
            >
                {text}
            </Text>
        )
    }


    return (
        <Text
            style={[
                styles.text,
                isheader ? styles.headertext : isSupporting && styles.supporting,
                isCentered && { textAlign: 'center' },
                style,
                size&&{fontSize:size},
                {fontFamily:'Inter'},
                capitalize&&{textTransform:'capitalize'}
            ]}
        >
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: vh(2),
        color: theme.gray.white,
        
    },
    headertext: {
        fontSize: vh(3.5),
        color: theme.gray.white,
        fontWeight: 'bold',
        
    },
    supporting: {
        fontSize: vh(1.8),
        color: theme.gray.gray2,
        fontWeight: '600',
        
    },

})

export default CustomText