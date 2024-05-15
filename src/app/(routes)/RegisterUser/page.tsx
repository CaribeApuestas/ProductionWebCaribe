import RegisterUserForm from "@/app/_components/RegisterUserForm";
import styles from "./styles.module.css";

export default function RegisterUser() {
    return (
        <section className={styles.container}>
            <h2> Registrate </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vel expedita quibusdam laborum assumenda exercitationem.
            </p>
            <RegisterUserForm />
        </section>
    )
}