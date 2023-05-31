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

export type ScenesStackParamList = {
  ScenesScreen: undefined;
  SelectDisplayScreen: undefined;
  DisplayConfigurationScreen: undefined;
  SelectArtworksScreen: undefined;
};

export type ScenesStackProps<Screen extends keyof ScenesStackParamList> =
  NativeStackScreenProps<ScenesStackParamList, Screen>;

export type DiscoverBottomTabParamList = {
  DiscoverScreen: undefined;
  FavoriteScreen: undefined;
  DiscoverView: undefined;
  ScenesStack: undefined;
  CurationsTabScreen: undefined;
  ProfileStack: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ProfileManagementScreen: undefined;
};
