// import BottomSheet from '@gorhom/bottom-sheet';
// import React, { useCallback } from 'react';
// import { StyleSheet } from 'react-native';


// interface TransactionSheetProps {
//   onSnap: (index: number) => void;
//   isVisible: boolean;
//   hideModal: () => void;
//   children: React.ReactElement;
// }

// export function TransactionSheet({
//   onSnap,
//   children,
//   isVisible,
//   hideModal,
// }: TransactionSheetProps) {
//   const handleSheetChanges = useCallback(
//     (index: number) => {
//       if (onSnap) {
//         onSnap(index);
//       }
//     },
//     [onSnap],
//   );

//   return (
//     <BottomSheet
//       handleStyle={styles.handleStyle}
//       handleIndicatorStyle={styles.handleIndicatorStyle}
//       snapPoints={[' 25%', '60%', '80%', '98%']}
//       onChange={handleSheetChanges}
//       backgroundStyle={styles.backgroundStyle}
//       style={styles.borderRadius}
//     >
//       {children}
//     </BottomSheet>
//   );
// }

// const styles = StyleSheet.create({
//   borderRadius: {
//     zIndex: 99,
//     borderTopRightRadius: 30,
//     borderTopLeftRadius: 30,
//   },
//   backgroundStyle: {
//     flex: 1,
//     backgroundColor:'white',
//     borderTopRightRadius: 30,
//     borderTopLeftRadius: 30,
//   },
//   handleStyle: {
//     height: 25,
//     marginTop: 20,
//     backgroundColor:'white',
//     borderTopRightRadius: 30,
//     borderTopLeftRadius: 30,
//   },
//   handleIndicatorStyle: { backgroundColor: '#D7D8DD', width: 50 },
// });