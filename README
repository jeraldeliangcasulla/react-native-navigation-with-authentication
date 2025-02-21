# React Native Authentication with Navigation

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

## Project Structure

📂 app/
 ├── 📂 navigations/        # Navigation setup for the app
 │   ├── RootNavigator.tsx  # Defines RootStack (includes AuthStack & MainTabs)
 │   ├── AuthStack.tsx      # Stack navigator for authentication (Login/Register)
 │   ├── MainTabs.tsx       # Bottom tab navigator for the main app
 │
 ├── 📂 screens/            # Contains all screen components
 │   ├── InitScreen.tsx     # Initial loading screen (e.g., checking auth state)
 │   ├── 📂 auth/           # Authentication-related screens
 │   │   ├── WelcomeScreen.tsx  # Welcome screen before login/signup
 │   │   ├── LoginScreen.tsx    # User login screen
 │   │   ├── SignupScreen.tsx   # User registration screen
 │   ├── 📂 main/           # Main application screens
 │   │   ├── ProfileScreen.tsx   # User profile screen
 │   │   ├── DashboardScreen.tsx # Main dashboard/home screen
 │
 ├── 📂 context/            # Global state management (Auth Context API)
 │   ├── AuthContext.tsx    # Provides authentication state & actions
 │
 ├── App.tsx                # Entry point of the app, initializes navigation


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
