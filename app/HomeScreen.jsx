import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigation } from 'expo-router';
import Sos from '../components/Sos';


// npx expo install react-native-maps
// npx expo install expo-sharing
// npx expo install expo-file-system

let locationsOfInterest = [
  {
    title: "FIRE",
    location: {
      latitude: -27.2,
      longitude: 145
    },
    description: "FireShield Emergency Services"
  },
  {
    title: "HOSPITAL",
    location: {
      latitude: -30.2,
      longitude: 150
    },
    description: "MIT Healthcare"
  },{
    title: "Police Station",
    location: {
      latitude: -34.01,
      longitude: 147
    },
    description: "Kothrud Police Station"
  },{
    title: "NDRF",
    location: {
      latitude: -26.0081,
      longitude: 148.11
    },
    description: "Natural Disaster "
  }
]

const mapJson = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffeb3b"
      },
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#1f0038"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 148.11,
    latitude: -26.85
  });
  const mapRef = useRef();

  const onRegionChange = (region) => {
    console.log(region);
  };
  

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker 
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({ width: 300, height: 300, result: 'base64'});
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64 });
    await shareAsync(uri);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Header className='absolute top-14'/>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef} 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: -26.852691607783505,
          latitudeDelta: 27.499085419977938,
          longitude: 148.1104129487327,
          longitudeDelta: 15.952148000000022,
        }}
        customMapStyle={mapJson}
      >
         
        {showLocationsOfInterest()}
        <Marker 
          draggable
          pinColor='#0000ff'
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor='#00ff00'
          coordinate={{ latitude: -35, longitude: 147}}
        >
          <Callout>
            <Text>Count: {count}</Text>
            <Button title='Increment Count' onPress={() => setCount(count + 1)} />
            <Button title='Take Snapshot and Share' onPress={takeSnapshotAndShare} />
          </Callout>
        </Marker>
        <Text style={styles.mapOverlay}>Longitude: {draggableMarkerCoord.longitude}, latitude: {draggableMarkerCoord.latitude}</Text>
        
      </MapView>
    <Footer/>
      {/* <Sos /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:'100%',
    height: '90%'
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center"
  }
});

const Footerin = ()=>{
  return (
    <View className='bg-red-500 w-96 flex flex-row items-start justify-start p-1 gap-3   '>
  <Image  source={require('../assets/images/home.png')} className='h-6 w-6 ' />
  </View>
)
}
const Headerin = ()=>{
  return (
    <View className='bg-red-500 w-96 flex flex-row items-start justify-start p-1 gap-5  '>
   <Image source={require('../assets/images/logo.png')} className='h-6 w-6'/>
  <Text className='text-xl text-white  '>Resq 1</Text>
  <Image  source={require('../assets/images/menu1.png')} className='h-6 w-6  ' />
  </View>
)
}

// const Sos = () =>{
//   const navigation = useNavigation()
  
//   const handlechange =()=>{
//     navigation.navigate('Agencies')
//       }
//   return (
//     <View onPress={handlechange} className='bg-red-500 h-10  w-full '>
//       <Text className='text-white text-center text-xl font-semibold py-1 '>SOS</Text>
//     </View>
//   )
// }