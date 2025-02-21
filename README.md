# React Native Navigation with Authentication

This project demonstrates a simple authentication flow using **React Navigation** with **Native Stack and Tabs** in a React Native app. It uses **Context API** for state management but can be replaced with other state management libraries like Redux, Zustand, or Recoil.

## Features

- **React Navigation Integration**
  - Uses `createNativeStackNavigator` for managing screens
  - Implements `createBottomTabNavigator` for main app navigation
- **Authentication Flow**
  - Conditional navigation based on authentication state
  - `AuthStack` for login/signup
  - `MainTabs` for authenticated users
- **State Management**
  - Uses `Context API` for authentication state (can be replaced with Redux/Zustand/etc.)
- **Navigation Actions**
  - `CommonActions.reset` used to replace authentication stack with main app
  - Navigation state persists across authentication changes

## Project Structure & Flow

### 1. App Initialization

- `App.tsx` is the entry point of the application.
- It initializes the navigation system using `RootNavigator.tsx`.

### 2. Navigation Setup

- **RootNavigator.tsx** manages the top-level navigation.
  - If the user is **not authenticated**, it loads `AuthStack.tsx`.
  - If the user is **authenticated**, it loads `MainTabs.tsx`.

### 3. Authentication Flow

- **AuthStack.tsx** contains:
  - `WelcomeScreen.tsx` → Shown before login/signup.
  - `LoginScreen.tsx` → Allows users to log in.
  - `SignupScreen.tsx` → Allows users to register.

### 4. Main Application Flow

- **MainTabs.tsx** contains the main app screens:
  - `DashboardScreen.tsx` → Displays the main dashboard.
  - `ProfileScreen.tsx` → Shows the user's profile.

### 5. State Management

- `AuthContext.tsx` manages the authentication state.
- The app can use any state management library, but it initializes with React Context API for demonstration purposes.

## Authentication Flow

- The app starts with a **LoadingScreen** (optional, e.g., splash screen)
- If authenticated → Redirects to `MainTabs`
- If not authenticated → Redirects to `AuthStack`
- After login, it replaces `AuthStack` with `MainTabs` using:
  ```tsx
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    })
  );
  ```

## Customizing State Management

If you prefer Redux, Zustand, or Recoil instead of Context API:

1. Replace `useLocalContext()` with your state management hook
2. Update the `AuthContext.tsx` with your preferred state logic

## Contributions

Feel free to fork and contribute to this project!

## License

This project is licensed under the MIT License.
