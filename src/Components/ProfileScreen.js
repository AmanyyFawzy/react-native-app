import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Header from '../Components/Header';
import DividerComponent from '../Components/DividerComponent';
import PersonalInfo from '../Components/PersonalInfo';
import LanguagesSkills from '../Components/LanguageSkills';
import Skills from '../Components/Skills';
import ExtraSkills from '../Components/ExtraSkills';
import DownloadButton from '../Components/DownloadButton';
import styles from '../Styles/AppStyles';

export default function ProfileScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <DividerComponent />
      <PersonalInfo />
      <DividerComponent />
      <LanguagesSkills />
      <DividerComponent />
      <Skills />
      <DividerComponent />
      <ExtraSkills />
      <DividerComponent />
      <DownloadButton />
      <StatusBar style="light" />
    </ScrollView>
  );
}
