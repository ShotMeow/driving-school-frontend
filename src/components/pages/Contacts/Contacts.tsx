import React, { FC } from "react";

import styles from "./Contacts.module.scss";
import QuestionsSection from "../Home/QuestionsSection/QuestionsSection";
import ContactsSection from "./ContactsSection/ContactsSection";

const Contacts: FC = () => {
  return (
    <main className={styles.main}>
      <ContactsSection />
      <QuestionsSection />
    </main>
  );
};

export default Contacts;
