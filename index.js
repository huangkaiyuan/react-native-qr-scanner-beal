import QRscanner from './src/QRScanner'
import { NativeModules,Platform } from 'react-native';

const QRreader = (fileUrl,options)=>{
  var QRScanReader = NativeModules.QRScanReader;
  return Platform.OS === 'ios'? QRScanReader.readerQR(fileUrl):QRScanReader.readerQR(fileUrl,options);    
}
export {QRscanner, QRreader}