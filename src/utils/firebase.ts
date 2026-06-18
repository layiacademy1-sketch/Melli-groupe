import { ContactFormData } from '../types';

let db: any = null;
let app: any = null;

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  };
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: null,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function getFirebaseDb(): Promise<any> {
  if (db) return db;
  try {
    // Dynamic import to prevent compilation crash if file isn't provisioned yet
    // We use a variable path with vite-ignore to prevent compile-time static resolution
    const configPath = '../../firebase-applet-config.json';
    // @ts-ignore
    const configModule = await import(/* @vite-ignore */ configPath);
    const config = configModule.default || configModule;
    
    if (config && config.apiKey) {
      const { initializeApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      
      if (!app) {
        app = initializeApp(config);
      }
      db = getFirestore(app);
      return db;
    }
  } catch (error) {
    console.warn("Firebase not yet provisioned. Falling back to local tracking.", error);
  }
  return null;
}

/**
 * Saves a contact form submission.
 * First tries Firebase Firestore. If missing or fails, falls back to localStorage.
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; source: 'firebase' | 'local' }> {
  const submission = {
    ...data,
    createdAt: new Date().toISOString(),
  };

  const firestoreDb = await getFirebaseDb();
  if (firestoreDb) {
    try {
      const { collection, addDoc } = await import('firebase/firestore');
      const path = 'contact_submissions';
      await addDoc(collection(firestoreDb, path), submission);
      return { success: true, source: 'firebase' };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'contact_submissions');
    }
  }

  // Fallback to localStorage if Firebase is not connected
  try {
    const key = 'melli_contact_submissions';
    const existingRaw = localStorage.getItem(key);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    existing.push(submission);
    localStorage.setItem(key, JSON.stringify(existing));
    return { success: true, source: 'local' };
  } catch (error) {
    console.error("Local storage fallback also failed:", error);
    return { success: false, source: 'local' };
  }
}
