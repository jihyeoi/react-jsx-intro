function Person({name, age}) {
  const formattedName = name.slice(0, 6);
  const votingAge = age >=18;

  return (
  <h3>{formattedName}: {votingAge ? "please go vote!" : "you must be 18"}</h3>
  )
}