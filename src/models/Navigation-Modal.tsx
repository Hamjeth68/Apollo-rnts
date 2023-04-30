import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  OnboardingScreen: undefined;
  PreferencesScreen: undefined;
  HomeNewScreen: undefined;
  DiscoverBottomTab: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

export type DiscoverBottomTabParamList = {
  DiscoverScreen: undefined;
};
