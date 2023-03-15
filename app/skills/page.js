import styles from "../page.module.css";

async function getSkills() {
    const skills = await fetch("/api/skills");
    return skills.json();
    
}

export default async function skills () {
    return (
        <div className={styles.container}>
      
    </div>
        )
}