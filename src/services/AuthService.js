import { auth, database } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, set, get } from 'firebase/database';


// Register a new user
const registerUser = (email, password, role, tags = []) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Save additional user info in the database
      const userId = userCredential.user.uid;
      return set(ref(database, 'users/' + userId), {
        email,
        role,
        tags
      });
    });
};

// Log in an existing user
const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Fetch user role and tags from the database
      const userId = userCredential.user.uid;
      return get(ref(database, `users/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val(); // Return user data including role and tags
          } else {
            throw new Error('User data not found');
          }
        });
    });
};

const logoutUser = () => {
  return signOut(auth);
};

export { registerUser, loginUser, logoutUser };
