import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    labels: {
        color: 'white',
    },
    input: {
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 20
    },
    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    bottomText: {
        color: 'white',
        fontSize: 14,
    },
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop: 15
    },


});

export default styles;