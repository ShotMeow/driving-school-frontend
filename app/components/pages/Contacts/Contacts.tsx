import React, { FC } from "react";

import styles from "./Contacts.module.scss";
import QuestionsSection from "@/components/pages/Home/QuestionsSection/QuestionsSection";
import ContactsSection from "@/components/pages/Contacts/ContactsSection/ContactsSection";

const Contacts: FC = () => {
  return (
    <main className={styles.main}>
      <ContactsSection />
      <QuestionsSection />
    </main>
  );
};

export default Contacts;
