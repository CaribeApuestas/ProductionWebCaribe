import RecoverPasswordForm from "@/app/_components/RecoverPasswordForm";
import styles from "./styles.module.css";

export default function RecoverPassword() {
    return (
        <section className={styles.container}>
            <h2> Recuperar contraseña </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vel expedita quibusdam laborum assumenda exercitationem.
            </p>
            <RecoverPasswordForm />
        </section>
    )
}