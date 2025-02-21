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

````mermaid
graph TD;
    A[app/] --> B[navigations/]
    B --> B1[RootNavigator.tsx - Defines RootStack (AuthStack & MainTabs)]
    B --> B2[AuthStack.tsx - Authentication stack (Login/Register)]
    B --> B3[MainTabs.tsx - Main app bottom tabs]

    A --> C[screens/]
    C --> C1[InitScreen.tsx - Initial loading screen]

    C --> C2[auth/ - Authentication screens]
    C2 --> C2A[WelcomeScreen.tsx - Welcome screen before login/signup]
    C2 --> C2B[LoginScreen.tsx - User login screen]
    C2 --> C2C[SignupScreen.tsx - User registration screen]

    C --> C3[main/ - Main application screens]
    C3 --> C3A[ProfileScreen.tsx - User profile screen]
    C3 --> C3B[DashboardScreen.tsx - Main dashboard/home screen]

    A --> D[context/ - Global state management]
    D --> D1[AuthContext.tsx - Provides authentication state & actions]

    A --> E[App.tsx - Entry point, initializes navigation]


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
````

## Customizing State Management

If you prefer Redux, Zustand, or Recoil instead of Context API:

1. Replace `useLocalContext()` with your state management hook
2. Update the `AuthContext.tsx` with your preferred state logic

## Contributions

Feel free to fork and contribute to this project!

## License

This project is licensed under the MIT License.
