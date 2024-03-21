// import { ImagePickerOptions } from 'expo-image-picker';
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';
// import ImagePicker, { CameraOptions, ImagePickerResponse, OptionsCommon, launchCamera } from 'react-native-image-picker';

// const Bai1Lab4 = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [imgages, setImages] = useState(null);

//   const handleChoosePhoto = () => {
//     const options = {
//         mediaType: 'photo',
//         quality: 1,
//         maxWidth: 300,
//         maxHeight: 300,
//       };
//     const commonOptions: OptionsCommon = {
//         mediaType : 'photo',
//         maxHeight : 500,
//         maxWidth : 500,
//     }

//     const cameraOptions : CameraOptions = {
//        cameraType : 'front',
//        saveToPhotos : true,
//        ...commonOptions,
//     }
    
//     const onOpenCamera = async () => {
//         const response: ImagePickerResponse = await launchCamera(cameraOptions);
//         if(response?.assets) {
//             setImages(response.assets);
//         }else{
//             Alert.alert('co loi xay ra',response.errorCode)
//         }
//     }
    
//     ImagePicker.launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera picker');
//       } else if (response.errorMessage) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       }
//     },onOpenCamera);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleChoosePhoto} style={styles.button}>
//         <Text style={styles.buttonText}>Chụp ảnh</Text>
//       </TouchableOpacity>
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5fcff',
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 20,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });

// export default Bai1Lab4;
