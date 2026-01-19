import { initializeApp, getApps, cert, type App } from 'firebase-admin/app'
import { getFirestore, type Firestore } from 'firebase-admin/firestore'

let app: App | null = null
let db: Firestore | null = null

/**
 * Initialize Firebase Admin SDK
 * In Firebase Functions/Cloud Run, credentials are auto-detected
 * Locally, use GOOGLE_APPLICATION_CREDENTIALS env var or service account
 */
export function getFirebaseApp(): App {
  if (app) return app

  const apps = getApps()
  if (apps.length > 0) {
    app = apps[0]
    return app
  }

  // Initialize with auto-detected credentials (works in Firebase/GCP environments)
  app = initializeApp()
  return app
}

/**
 * Get Firestore instance
 */
export function getFirestoreDb(): Firestore {
  if (db) return db

  getFirebaseApp()
  db = getFirestore()
  return db
}
