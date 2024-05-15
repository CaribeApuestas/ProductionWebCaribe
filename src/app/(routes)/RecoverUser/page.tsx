import RecoverUserForm from "@/app/_components/RecoverUserForm";
import styles from "./styles.module.css";

export default function RecoverUser() {
    return (
        <section className={styles.container}>
            <h2> Recuperar usuario </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vel expedita quibusdam laborum assumenda exercitationem.
            </p>
            <RecoverUserForm />
        </section>
    )
}