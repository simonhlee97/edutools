import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCE8gOklPtMkjjfbIt-XoG3K4IP_R4cEHE",
    authDomain: "store-crown.firebaseapp.com",
    databaseURL: "https://store-crown.firebaseio.com",
    projectId: "store-crown",
    storageBucket: "store-crown.appspot.com",
    messagingSenderId: "120121196191",
    appId: "1:120121196191:web:d326e28fc7331ddc78ecaa",
    measurementId: "G-P9YHNY1PH5"
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating User', error.message);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	})

	return await batch.commit()
}
const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.doc.map(doc =>{
		const {title, items} = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.ui,
			items,

		}
	})
} 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

