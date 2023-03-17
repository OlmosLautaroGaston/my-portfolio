import styles from "../page.module.css";
async function fetchSkills() {
  return fetch("http://localhost:4000/api/contents").then((res) => res.json());
}

export default async function SkillsPage() {
  const skills = await fetchSkills();
  return (
    <div className={styles.cardContainer}>
      {skills?.map((skill) => (
        <div className={styles.card} key={skill._id}>
          <h1>{skill.company}</h1>
          <p>{skill.position}</p>
          <h2>{skill.duration}</h2>
          <div style={{textAlign: "left"}}>
            {skill.responsabilities?.map((res) => 
              <h4>{`* ${res}`}</h4>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
